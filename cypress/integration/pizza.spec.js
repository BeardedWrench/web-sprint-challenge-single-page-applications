describe( "Pizza App - Ordering test", () => {
    beforeEach( () => {
        cy.visit("http://localhost:3000/order")
    })
    
    const additionalInput = () => cy.get( 'input[name="additional"]' );
    const sizeInput = () => cy.get( 'select[name="size"]' );
    const sauceInput = () => cy.get( 'input[name="sauce"]' );

    const pepperoni = () => cy.get( 'input[name="pepperoni"]' );
    const sausage = () => cy.get( 'input[name="sausage"]' );
    
    const submitBtn = () => cy.get( 'button[id="subBtn"]' );

    it( 'Make sure testing is operational', () => {
        expect( 1 + 2 ).to.equal( 3 );
        expect( 2 + 2 ).not.to.equal( 5 );
    })
    it( "Test input fields", () => {
        sizeInput().select('large');

        sauceInput().check( 'Original-Red' );

        pepperoni().check();
        sausage().check();

        submitBtn().click();
    } )
})