const Proveedores = require ('../models/proveedores')

const getAll = (req, res) => {
    Proveedores.find({ isDeleted: false })
      .then((data) => res.status(200).json({ data }))
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
}


const create = (req, res) => {
    const newProv = {
        name: req.body.name,
        mail: req.body.mail,
        description: req.body.description,
    };

    Proveedores.create(newProv)
        .then((data) => res.status(201).json({ msg: "Provider added: ", data }))
        .catch((err) => res.status(400).json({ msg: `Error: ${err}` }));
};

const update = (req, res) => {
    const provUpdate = {
        name: req.body.name,
        mail: req.body.mail,
        description: req.body.description,
    };
    Proveedores.findByIdAndUpdate(req.params.id, provUpdate)
    .then((data) => res.status(201).json({ msg: "Provider updated: ", data}))
    .catch((err) => res.status(400).json({ msg: `Error: ${err}`}));
}

const toDelete = (req, res) => {
    const provDelete = {
        isDeleted: true
    };
    Proveedores.findByIdAndUpdate(req.params.id, provDelete)
    .then((data) => res.status(204).json({ msg: "Provider deleted: ", data}))
    .catch((err) => res.status(404).json({ msg: `Error: ${err}`}));
}

const alta = (req, res) => {
    const provAlta = {
        isDeleted: false
    };
    Proveedores.findByIdAndUpdate(req.params.id, provAlta)
    .then((data) => res.status(201).json({ msg: "Provider registered again: ", data}))
    .catch((err) => res.status(400).json({ msg: `Error: ${err}`}));
}






module.exports = {
getAll, 
create,
update,
toDelete,
alta
};