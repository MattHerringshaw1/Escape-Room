import { useEffect, useState } from 'react';


function UploadPic() {

    const username = localStorage.getItem('username')

    return (
        <div className="container">
        <div className="row">
            <form>
                <h3>Upload Profile Pic</h3>
                <div className="form-group">
                    <input type="file" />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">Upload</button>
                </div>
            </form>
        </div>
    </div>
    )

}

export default UploadPic