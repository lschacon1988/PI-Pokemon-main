

export const url=(input)=>{
    let error = {}
    if(!/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(input.img)){
        error.img = 'direccion no valida'
      }
      return error;
}