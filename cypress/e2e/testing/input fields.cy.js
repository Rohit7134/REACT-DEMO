describe('Form Input Test', () => {
  beforeEach(() => {
    // Visit the form page before each test
    cy.visit('http://localhost:3000'); // Replace with your actual login page URL
  });

  it('should allow entering values in Name', () => {
    
    // Enter a value in the Name field
    cy.get('input[name="name"]') // Adjust this selector to match your Name input field
      .type('John Doe')
      .should('have.value', 'John Doe'); // Verify the Name field value
  });

  it('should allow entering values in Email', () => {
    
    cy.get('input[name="email"]') // Adjust this selector to match your Email input field
      .type('johndoe@example.com')
      .should('have.value', 'johndoe@example.com'); // Verify the Email field value
  });

  it('should allow entering values in Password field', () => {
   
    cy.get('input[name="password"]') // Adjust this selector to match your Password input field
      .type('password123')
      .should('have.value', 'password123'); // Verify the Password field value
  });

  it('should allow click on signup button', () => {
   
    cy.get('a').contains('Sign Up')
      .should('be.visible')
      .click();

    cy.url().should('include', 'http://localhost:3000/about');

    cy.get('h1').contains('About')
      .should('be.visible')
      .should('have.text', 'About');
  });

  it('about page appearance', () => {

        cy.visit('http://localhost:3000/about');
       
        cy.get('h1').contains('About')
          .should('be.visible')
          .should('have.text', 'About');
          
  });
    
  
});

