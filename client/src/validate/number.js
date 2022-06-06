export const number = (input) => {
  let error = {};
  if (!input.attack) {
    error.attack = "este campo es obligatorio";
  } else if (!/^[0-9]*(\.?)[ 0-9]+$/.test(input.attack)) {
    error.attack = "Solo numeros";    
  }
  if (!input.hp) {
    error.hp = "este campo es obligatorio";
  } else if (!/^[0-9]*(\.?)[ 0-9]+$/.test(input.hp)) {
    error.hp = "Solo numeros";    
  }
  if (!input.defense) {
    error.defense = "este campo es obligatorio";
  } else if (!/^[0-9]*(\.?)[ 0-9]+$/.test(input.defense)) {
    error.defense = "Solo numeros";    
  }
  if (!input.height) {
    error.height = "este campo es obligatorio";
  } else if (!/^[0-9]*(\.?)[ 0-9]+$/.test(input.height)) {
    error.height = "Solo numeros";    
  }
  if (!input.weight) {
    error.weight = "este campo es obligatorio";
  } else if (!/^[0-9]*(\.?)[ 0-9]+$/.test(input.weight)) {
    error.weight = "Solo numeros";    
  }
  if (!input.speed) {
    error.speed = "este campo es obligatorio";
  } else if (!/^[0-9]*(\.?)[ 0-9]+$/.test(input.speed)) {
    error.speed = "Solo numeros";    
  }

  return error;
};
