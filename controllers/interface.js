const TaskModel = require("../models/TaskModel");
const getHome = (req, res) => {
  TaskModel.find()
    .then((documents) => {
      console.log(documents);
      res.status(200).render("home", {
        tasks: documents,
      });
    })
    .catch((error) => console.log(error));
};

const getNewTask = (req, res) => {
  res.status(200).render("new-task-form", {
    error: {
      status: false,
    },
  });
};

const postNewTask = (req, res) => {
  let errorMessage = [];
  let j = 0;

  if (req.body.label == "") {
    errorMessage[j] = "Le label n'est pas rempli";
    j++;
  }

  if (req.body.description == "") {
    errorMessage[j] = "La description n'est pas rempli";
    j++;
  }

  if (req.body.dateTask == "") {
    errorMessage[j] = "La  date de tâche n'est pas rempli";
    j++;
  }

  if (errorMessage.length > 0) {
    res.render("new-task-form", {
      error: {
        status: true,
        message: errorMessage,
      },
    });
  } else {
    //console.log(req.body);
    const newTask = new TaskModel(req.body);

    newTask
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => console.log(error));

    console.log("Donnée ajouté avec succès : \n\n");
    console.log(newTask);
  }
};

const getDeleteTask = (req, res) => {
  console.log(req.params.id);
  TaskModel.deleteOne({
    _id: req.params.id,
  })
    .then(() => res.redirect("/"))
    .catch((error) => console.log(error));
};
module.exports = {
  getHome,
  getNewTask,
  postNewTask,
  getDeleteTask,
};
