const { tasksCollection } = require('../models/tareaModel');

// Obtener todas las tareas
exports.getAllTasks = async (req, res) => {
    try {
        const snapshot = await tasksCollection.get();
        let tasks = [];
        snapshot.forEach(doc => tasks.push({ id: doc.id, ...doc.data() }));
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener tareas", error });
    }
};

// Obtener una tarea por ID
exports.getTaskById = async (req, res) => {
    try {
        const taskDoc = await tasksCollection.doc(req.params.id).get();
        if (!taskDoc.exists) {
            return res.status(404).json({ message: "Tarea no encontrada" });
        }
        res.status(200).json({ id: taskDoc.id, ...taskDoc.data() });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener tarea", error });
    }
};

// Crear una nueva tarea
exports.createTask = async (req, res) => {
    try {
        const newTask = {
            title: req.body.title,
            description: req.body.description
        };
        const docRef = await tasksCollection.add(newTask);
        res.status(201).json({ id: docRef.id, ...newTask });
    } catch (error) {
    console.error("Error al crear tarea:", error); 
    res.status(500).json({ message: "Error al crear tarea", error: error.message });
    }
};


// Actualizar una tarea por ID
exports.updateTask = async (req, res) => {
    try {
        const taskRef = tasksCollection.doc(req.params.id);
        await taskRef.update({ title: req.body.title });
        res.status(200).json({ message: "Tarea actualizada" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar tarea", error });
    }
};