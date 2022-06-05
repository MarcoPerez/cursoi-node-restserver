const {response,request}=require('express');


const usuariosGet=(req=request, res=response)=>{

   const {nombre,limite,page=1}=req.query;
    

    res.json({
        msg:'get API - controller',
        nombre,
        limite,
        page
    });
}

const usuariosPost=(req, res)=>{
const body=req.body;

    res.json({
        msg:'post API - controller',
        body
    });
}

const usuariosPut=(req, res=response)=>{

    const {id}=req.params;

    res.json({
        msg:'put API - controller',
        id
    });
}

const usuariosDelete=(req, res)=>{
    res.json({
        msg:'delete API - controller'
    });
}




module.exports={
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}