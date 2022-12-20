


function EditUser() {

    return (
        <>
        <h1>user info</h1>

        <div>
            <input type='text' name='first_name' placeholder='Enter First Name' onChange={(e) => setFirstname(e.target.value)} />
            <input type='text' name='last_name' placeholder='Enter Last Name' onChange={(e) => setLastname(e.target.value)} />
            <input type='text' name='email' placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} />
            <input type='text' name='username' placeholder='Enter username' onChange={(e) => setUsername(e.target.value)} />
            <button onClick={handleEdit}>Save</button>
        
        </div>

        </>
    )
}

export default EditUser