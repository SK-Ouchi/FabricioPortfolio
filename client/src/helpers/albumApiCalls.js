const APIURL = "/api/albums";

export async function getAlbums(){
return fetch(APIURL)
        //If the response has been made
        .then(resp => {
            //But is not okay
            if(!resp.ok){
                //Is the status greater than 400 and less than 500
                if(resp.status >= 400 && resp.status < 500){
                    //Return the response error
                    return resp.json().then(data => {
                        //call a generic message to display
                        let err = {errorMessage: data.message};
                        throw err;
                    })
                }else{
                    let err = {errorMessage:'Please try again'}
                    throw err;
                }
            }
            //Return json
            return resp.json();
        })
}

export async function showAlbum(id){
    const showURL = APIURL + id;
    return fetch(showURL)
            //If the response has been made
            .then(resp => {
                //But is not okay
                if(!resp.ok){
                    //Is the status greater than 400 and less than 500
                    if(resp.status >= 400 && resp.status < 500){
                        //Return the response error
                        return resp.json().then(data => {
                            //call a generic message to display
                            let err = {errorMessage: data.message};
                            throw err;
                        })
                    }else{
                        let err = {errorMessage:'Please try again'}
                        throw err;
                    }
                }
                //Return json
                return resp.json();
            })
    }



// export async function createAlbum(val){
//     return fetch(APIURL, {
//         method: 'post',
//         headers: new Headers ({
//             'Content-Type': 'application/json',
//         }),
//         body: JSON.stringify({name:val})
//     })
//     //If the response has been made
//     .then(resp => {
//         //But is not okay
//         if(!resp.ok){
//             //Is the status greater than 400 and less than 500
//             if(resp.status >= 400 && resp.status < 500){
//                 //Return the response error
//                 return resp.json().then(data => {
//                     //call a generic message to display
//                     let err = {errorMessage: data.message};
//                     throw err;
//                 })
//             }else{
//                 let err = {errorMessage:'Please try again'}
//                 throw err;
//             }
//         }
//         //Return json
//         return resp.json();
//     })
// }

// export async function removeAlbum(id){
//     const deleteURL = APIURL + id;
//     return fetch(deleteURL, {
//         method: 'delete',
//     })
//     //If the response has been made
//     .then(resp => {
//         //But is not okay
//         if(!resp.ok){
//             //Is the status greater than 400 and less than 500
//             if(resp.status >= 400 && resp.status < 500){
//                 //Return the response error
//                 return resp.json().then(data => {
//                     //call a generic message to display
//                     let err = {errorMessage: data.message};
//                     throw err;
//                 })
//             }else{
//                 let err = {errorMessage:'Please try again'}
//                 throw err;
//             }
//         }
//         //Return json
//         return resp.json();
//     })
// }

// export async function updateAlbum(album){
//     const updateURL = APIURL + album._id;
//         return fetch(updateURL, {
//             method: 'put',
//             headers: new Headers ({
//                 'Content-Type': 'application/json',
//             }),
//             //If it is false set it to true and vice versa
//             body: JSON.stringify({completed: !todo.completed})
//         })
//         //If the response has been made
//         .then(resp => {
//             //But is not okay
//             if(!resp.ok){
//                 //Is the status greater than 400 and less than 500
//                 if(resp.status >= 400 && resp.status < 500){
//                     //Return the response error
//                     return resp.json().then(data => {
//                         //call a generic message to display
//                         let err = {errorMessage: data.message};
//                         throw err;
//                     })
//                 }else{
//                     let err = {errorMessage:'Please try again'}
//                     throw err;
//                 }
//             }
//             //Return json
//             return resp.json();
//         })
// }