export const getExample = (req, res) => {
    res.send('This is an example response from the controller.');
};

export const createExample = (req, res) => {
    const data = req.body;
    // Logic to handle data creation
    res.status(201).send({ message: 'Data created successfully', data });
};

export const updateExample = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    // Logic to handle data update
    res.send({ message: `Data with id ${id} updated successfully`, data });
};

export const deleteExample = (req, res) => {
    const { id } = req.params;
    // Logic to handle data deletion
    res.send({ message: `Data with id ${id} deleted successfully` });
};