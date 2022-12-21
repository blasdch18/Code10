const url = "https://6386dc09d9b24b1be3dff078.mockapi.io/tareas";
/*
 GET: listar
 POST: Crear
 PUT: Actualizar
 DELETE: Eliminar
*/

export const get = async () => {
    try{

        const response = await fetch(url);
        const data = await response.json();
        return data ;

    }catch(error){
        console.log(error);
    }
};

export const post = async(body) => {
    try {
        const response = await fetch( url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(body),
        });
        const data = await response.json();
        return data;
        
    }catch(error){
    
    }
};
// id: tarea
export const update = async(id, body) => {
    try{
        const response = await fetch(`${url}/${id}`,{
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(body),
        });
        const data = await response.json();
        return data;
    }catch (error){
        console.log(error);
    }
};

// Para eliminar solo necesitamos el id 
export const destroy  = async(id) => {
    try {
        const response = await fetch(`${url}/${id}`,{
            method: "DELETE",
            headers: {
                "Content-type":"application/json"
            }
        });
        const data = await response.json();
        return data;
    }catch(error) {
        console.log(error);
    }
}