//When we want something from the user (client) we get it from request object
//When we want to send something to the user, we use response object

const registerUser = async (request, response) => {
    const { name, email, password, avatar } = request.body;

    response.json({
        name,
        email
    })
}

module.exports = { registerUser };