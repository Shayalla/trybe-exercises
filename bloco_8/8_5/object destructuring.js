const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };

const { name, seller } = product;
console.log(name); // Smart TV Crystal UHD
console.log(seller); // Casas de Minas


const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };
  
//As propriedades do objeto student não são nada descritivas, não é mesmo? Se fossemos desestruturar esse objeto, as variáveis que seriam criadas ao extrair as propriedades de students teriam nomes sem significado...pensando nisso, podemos trocar o nome da variável ao fazermos a desestruturação:

  const { a: name, b: classAssigned, c: subject } = student;
  
  console.log(name); // Maria
  console.log(classAssigned); // Turma B
  console.log(subject); // Matemática

  const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };
  
  const printProductDetails = ({ name, price, seller }) => {
    console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
  };
  
  printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas