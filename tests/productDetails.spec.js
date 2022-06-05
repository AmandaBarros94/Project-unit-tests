const productDetails = require('../src/productDetails');

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
   
    expect(typeof productDetails).toBe('function');
    
    expect(Array.isArray(productDetails('Alcool gel', 'Másacara'))).toBe(true);
    
    expect(productDetails('Álcool gel', 'Máscara')).toHaveLength(2);
    
    expect(typeof productDetails('Álcool gel', 'Máscara')[0]).toBe('object');

    expect(typeof productDetails('Álcool gel', 'Máscara')[1]).toBe('object');
    
    expect(productDetails('Álcool gel', 'Máscara')).not.toEqual(productDetails('Máscara', 'Álcool gel'));
    
    expect(productDetails('Álcool gel', 'Máscara')[0].details.productId.endsWith('123')).toBe(true);
    
    expect(productDetails('Álcool gel', 'Máscara')[1].details.productId.endsWith('123')).toBe(true);
  });
});
