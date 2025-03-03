
describe ('automation exercise registration', ()=>{    
    it('should register new user successfully', () => {
        cy.visit('https://automationexercise.com');
        cy.title().should('eq','Automation Exercise');
        cy.get('[href="/login"]').should('be.visible').click();
        cy.get('h2:contains("New User Signup!")').should('be.visible');
        cy.get('[data-qa="signup-name"]').type('tired');
        cy.get('[data-qa="signup-email"]').type('spongestar@mail.com');
        cy.get('[data-qa="signup-button"]').click();
        cy.contains("Enter Account Information").should('have.text','Enter Account Information');
        cy.get('#id_gender2').check();
        cy.get('[data-qa="password"]').type('Rocktester24');
        cy.get('select[id="days"]').select('25');
        cy.get('select[id="months"]').select('March').should('have.value','3');
        cy.get('select[id="years"]').select('2000');
        cy.get('[name="newsletter"]').check();
        cy.get('input[type="checkbox"]').check();
        cy.get('[data-qa="first_name"]').type('tired');
        cy.get('[data-qa="last_name"]').type('tester');
        cy.get('[name="company"]').type('bughunters');
        cy.get('[name="address1"]').type('23rd street');
        cy.get('[name="address2"]').type('crystal city');
        cy.get('select[id="country"]').select('United States');
        cy.get('[name="state"]').type('virginia');
        cy.get('[data-qa="city"]').type('arlington');
        cy.get('[name="zipcode"]').type('22202');
        cy.get('[data-qa="mobile_number"]').type('5716229997');
        cy.get('[data-qa="create-account"]').click();
        cy.get('[data-qa="account-created"]').should('be.visible');
        cy.get('[data-qa="continue-button"]').click();
        cy.contains(" Logged in as ").should('be.visible');
        cy.get('[href="/delete_account"]').should('be.visible').click();
        cy.get('[data-qa="account-deleted"]').should('be.visible');
        cy.get('[data-qa="continue-button"]').click();
        
    });

    it('should log in user before checkout successfully',()=>{
        cy.visit('http://automationexercise.com');
        cy.title().should('eq','Automation Exercise');
        cy.get('[href="/login"]').click();
        cy.get('[data-qa="login-email"]').type('sackstar@mail.com');
        cy.get('[data-qa="login-password"]').type('Rocktester24');
        cy.get('[data-qa="login-button"]').click();
        cy.contains(' Logged in as ').should('be.visible');
        cy.get('[data-product-id="1"]').first().click();
        cy.get('[href="/view_cart"]').last().click();
        cy.title().should('eq','Automation Exercise - Checkout');
        cy.contains('Proceed To Checkout').click();
        cy.get('#address_delivery').should('be.visible');
        cy.get('[href="/product_details/1"]').should('be.visible');
        cy.get('#cart_info').should('be.visible');
        cy.get('[name="message"]').type('experience');
        cy.get('[href="/payment"]').click();
        cy.get('[data-qa="name-on-card"]').type('tired');
        cy.get('[data-qa="card-number"]').type('123456789');
        cy.get('[data-qa="cvc"]').type('101');
        cy.get('[data-qa="expiry-month"]').type('06');
        cy.get('[data-qa="expiry-year"]').type('2026');
        cy.get('[data-qa="pay-button"]').click();
        cy.contains('Congratulations! Your order has been confirmed!').should('be.visible').and('have.text','Congratulations! Your order has been confirmed!');
        // cy.get('[href="/delete_account"]').should('be.visible').click();
        // cy.get('[data-qa="account-deleted"]').should('be.visible');
        // cy.get('[data-qa="continue-button"]').click();
    })

    it('should submit contact form successfully',()=>{
        cy.visit('http://automationexercise.com');
        cy.title().should('eq','Automation Exercise');
        cy.get('[href="/contact_us"]').click();
        cy.contains('Get In Touch').should('be.visible').and('have.text','Get In Touch'),
        cy.get('[data-qa="name"]').type('tired tester');
        cy.get('[data-qa="email"]').type('rocker@mail.com');
        cy.get('[data-qa="subject"]').type('messageline');
        cy.get('#message').type('always an experience');
        cy.fixture('cypix.png', null).as('myFixture');
        cy.get('[name="upload_file"]').selectFile('@myFixture');
        cy.get('[data-qa="submit-button"]').click();
        cy.on('window.alert',(text)=>{expect(text).to.contains('ok')});
        cy.contains('Success! Your details have been submitted successfully.').should('be.visible')
        cy.contains(' Home').should('have.text',' Home').click();
        cy.title().should('eq','Automation Exercise');
    })

    it('should download invoice after purchase successfully',()=>{
        cy.visit('http://automationexercise.com');
        cy.title().should('eq','Automation Exercise');
        cy.get('[data-product-id="1"]').first().click();
        cy.get('[href="/view_cart"]').last().click();
        cy.title().should('eq','Automation Exercise - Checkout');
        cy.contains('Proceed To Checkout').click();
        cy.get('[href="/login"]').last().click();
        cy.get('[data-qa="signup-name"]').type('tired');
        cy.get('[data-qa="signup-email"]').type('stuperstar@mail.com');
        cy.get('[data-qa="signup-button"]').click();
        cy.get('#id_gender1').check();
        cy.get('[data-qa="password"]').type('Rocktester24');
        cy.get('select[id="days"]').select('25');
        cy.get('select[id="months"]').select('March').should('have.value','3');
        cy.get('select[id="years"]').select('2000');
        cy.get('[name="newsletter"]').check();
        cy.get('input[type="checkbox"]').check();
        cy.get('[data-qa="first_name"]').type('cypress');
        cy.get('[data-qa="last_name"]').type('test');
        cy.get('[name="company"]').type('bughunters');
        cy.get('[name="address1"]').type('23rd street');
        cy.get('[name="address2"]').type('crystal city');
        cy.get('select[id="country"]').select('United States');
        cy.get('[name="state"]').type('virginia');
        cy.get('[data-qa="city"]').type('arlington');
        cy.get('[name="zipcode"]').type('22202');
        cy.get('[data-qa="mobile_number"]').type('5716229997');
        cy.get('[data-qa="create-account"]').click();
        cy.get('[data-qa="account-created"]').should('be.visible');
        cy.get('[data-qa="continue-button"]').click();
        cy.contains(' Logged in as ').should('be.visible');
        cy.get('[href="/view_cart"]').first().click();
        cy.contains('Proceed To Checkout').click();
        cy.get('#address_delivery').should('be.visible');
        cy.get('[href="/product_details/1"]').should('be.visible');
        cy.get('#cart_info').should('be.visible');
        cy.get('[name="message"]').type('experience');
        cy.get('[href="/payment"]').click();
        cy.get('[data-qa="name-on-card"]').type('cypress');
        cy.get('[data-qa="card-number"]').type('123456789');
        cy.get('[data-qa="cvc"]').type('101');
        cy.get('[data-qa="expiry-month"]').type('06');
        cy.get('[data-qa="expiry-year"]').type('2026');
        cy.get('[data-qa="pay-button"]').click();
        cy.contains('Congratulations! Your order has been confirmed!').should('be.visible').and('have.text','Congratulations! Your order has been confirmed!');
        cy.get('[href="/download_invoice/500"]').click();
        cy.request('https://automationexercise.com/download_invoice/500')
        cy.readFile('cypress/downloads/invoice.txt').should('exist');
        cy.get('[data-qa="continue-button"]').click();
        cy.get('[href="/delete_account"]').should('be.visible').click();
        cy.get('[data-qa="account-deleted"]').should('be.visible');
        cy.get('[data-qa="continue-button"]').click();
    })

    it('should scroll up using arrow button and down successfully',()=>{
        cy.visit('http://automationexercise.com');
        cy.title().should('eq','Automation Exercise');
        cy.scrollTo('bottom');
        cy.contains('Subscription').should('be.visible');
        cy.get('#scrollUp').click();
        cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');
    })

    it('should scroll up without arrow button and down successfully',()=>{
        cy.visit('http://automationexercise.com');
        cy.title().should('eq','Automation Exercise');
        cy.scrollTo('bottom');
        cy.contains('Subscription').should('be.visible');
        cy.scrollTo('top');
        cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');
    })


    

})