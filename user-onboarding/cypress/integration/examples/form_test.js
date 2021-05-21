describe('User app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    const nameInput = () => cy.get('input[name=name]')
    const passInput = () => cy.get('input[name=password]')
    const emailInput = () => cy.get('input[name=email]')
    const termsInput = () => cy.get('input[name=terms]')
    const submitBtn = () => cy.get('button')
    
    // const textInput = () => cy.get('input[data-test=text-input-field')
    // const authorInput = () => cy.get('input[name=author]')
    // const submitBtn = () => cy.get('button[id=submitBtn]')
    // const cancelBtn = () => cy.get('button[id="cancelBtn"]')
    // const fakeBtn = () => cy.get('button[id="fakeBtn"]')

    it('sanity check to make sure tests work', () => {
        expect(1+2).to.equal(3)
        expect(2+2).not.to.equal(5)
        expect({}).not.to.equal({})
        expect({}).to.eql({})
    })

    it('the proper elements are showing',() =>{
        nameInput().should('exist')
        passInput().should('exist')
        emailInput().should('exist')
        termsInput().should('exist')
        submitBtn().should('exist')
    })


    describe('The fields', ()=> {
        it('Filling out the fields and checking it is empty', () => {
            nameInput().should('have.value','')
            nameInput().type('Robert Taveras')
            nameInput().should('have.value', 'Robert Taveras')
            emailInput().should('have.value','')
            emailInput().type('robert@gmail.com')
            emailInput().should('have.value','robert@gmail.com')
            passInput().should('have.value', '')
            passInput().type('password')
            passInput().should('have.value','password')
        })
    })
    describe('Checkbox and TOS', () =>{
        it(' For checkbox ', () =>{
            termsInput().should('be.not.checked')
        })
    }) 
    describe('Submitting an entry ', ()=>{
        it('submitting',() =>{
            nameInput().should('have.value','')
            nameInput().type('Robert Taveras')
            nameInput().should('have.value', 'Robert Taveras')
            emailInput().should('have.value','')
            emailInput().type('robert@gmail.com')
            emailInput().should('have.value','robert@gmail.com')
            passInput().should('have.value', '')
            passInput().type('password')
            passInput().should('have.value','password')
            termsInput().click()
            submitBtn().click()
        })
    })
        

})
    // it('the proper elements are showing', () => {
    //     textInput().should('exist')
    //     authorInput().should('exist')
    //     submitBtn().should('exist')
    //     cancelBtn().should('exist')
    //     fakeBtn().should('not.exist')

    //     cy.contains('Submit Quote').should('exist')
    //     cy.contains(/submit quote/i).should('exist')
    // })

    // describe('Filling out the inputs and cancelling', () => {
    //     it('can navigate to the site', () => {
    //         cy.url().should('include', 'localhost')
    //     })

    //     it('submit button starts out disabled', () => {
    //         submitBtn().should('be.disabled')
    //     })

    //     it('can type in the inputs', () => {
    //         textInput()
    //             .should('have.value', '')
    //             .type('Be nice to the CSS expert')
    //             .should('have.value', 'Be nice to the CSS expert')
    //         authorInput()
    //             .should('have.value', '')
    //             .type('Chris')
    //             .should('have.value', 'Chris')
    //     })

    //     it('the submit button enables when both inputs are filled out', () => {
    //         authorInput().type('Chris')
    //         textInput().type('Have fun!')
    //         submitBtn().should('not.be.disabled')
    //     })

    //     it('the cancel button can reset the inputs and disable the submit button', () => {
    //         authorInput().type('Chris')
    //         textInput().type('Have fun!')
    //         cancelBtn().click()
    //         textInput().should('have.value', '')
    //         authorInput().should('have.value', '')
    //         submitBtn().should('be.disabled')
    //     })
    // })

    // describe('Adding a new quote', () => {
    //     it('can submit and delete a new quote', () => {
    //         textInput().type('Have fun!')
    //         authorInput().type('Chris')
    //         submitBtn().click()

    //         // cy.contains('Have fun!').siblings('button:nth-of-type(2)').click()
    //         cy.contains('Have fun!').next().next().click()
    //         cy.contains('Have fun!').should('not.exist')

    //     })
    // })