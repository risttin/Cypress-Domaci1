/// <reference types="Cypress" />

describe('Register Positive Test Cases', () => {

  it('Register with Only 1 Char in the First Name Field', () => {
    cy.visit('/register');
    cy.get('#first-name').type("M");
    cy.get('#last-name').type('Ilic');
    cy.get('#email').type('testMarko150@test.com');
    cy.get('#password').type('test1234');
    cy.get('#password-confirmation').type('test1234');
    cy.get(':checkbox').check();
    cy.get('button').click();
    cy.url().should('not.include', '/register');
  })

  it('Register with 255 Chars in the First Name Input Field', () => {
    cy.visit('/register');
    cy.get('#first-name').type('JNulu759iwfSAyV2T1CAmENb7lJq4S1mMHDiXHcoGNvtVKL6RLARtsCmqviMexsYD7Iw4SZtCkVoXpp4RMvjio2RALc7vx8MQbFt8tHDVsiVJyRsu0QKr3ueRystrPkk9RdloiODDJ2QfpDwMpc3ahEjzH6igXOey2fhH8Pu6l1s7eUUgFcmffjqDiK5KMSODHawmK6mV9gqlDISgz7un5LRFiSJ4DsAOBOMNPVXap7ZlMNoAVba9S86oOwMkp2');
    cy.get('#last-name').type('Ilic');
    cy.get('#email').type('testMarko151@test.com');
    cy.get('#password').type('test1234');
    cy.get('#password-confirmation').type('test1234');
    cy.get(':checkbox').check();
    cy.get('button').click();
    cy.url().should('not.include', '/register');
  })

  it('Register by Providing Unicode Chars in the First Name Input Field', () => {
    cy.visit('/register');
    cy.get('#first-name').type('ちびまる子ちゃん');
    cy.get('#last-name').type('Ilic');
    cy.get('#email').type('testMarko152@test.com');
    cy.get('#password').type('test1234');
    cy.get('#password-confirmation').type('test1234');
    cy.get(':checkbox').check();
    cy.get('button').click();
    cy.url().should('not.include', '/register');
  })

  it('Register by Providing Letters with Spec Chars in the First Name Input Field', () => {
    cy.visit('/register');
    cy.get('#first-name').type('Marko-Rist\'ov');
    cy.get('#last-name').type('Ilic');
    cy.get('#email').type('testMarko153@test.com');
    cy.get('#password').type('test1234');
    cy.get('#password-confirmation').type('test1234');
    cy.get(':checkbox').check();
    cy.get('button').click();
    cy.url().should('not.include', '/register');
  })

  it('Register by Providing Alphanumeric Chars in the First Name Input Field', () => {
    cy.visit('/register');
    cy.get('#first-name').type('Marko 2');
    cy.get('#last-name').type('Ilic');
    cy.get('#email').type('testMarko154@test.com');
    cy.get('#password').type('test1234');
    cy.get('#password-confirmation').type('test1234');
    cy.get(':checkbox').check();
    cy.get('button').click();
    cy.url().should('not.include', '/register');
  })

  it('Register with Unnecessary Spaces in the First Name Input Field', () => {
    cy.visit('/register');
    cy.get('#first-name').type('     Marko          ');
    cy.get('#last-name').type('Ilic');
    cy.get('#email').type('testMarko155@test.com');
    cy.get('#password').type('test1234');
    cy.get('#password-confirmation').type('test1234');
    cy.get(':checkbox').check();
    cy.get('button').click();
    cy.url().should('not.include', '/register');
  })

  it('Register with 1 Char in the Last Name Input Field', () => {
    cy.visit('/register');
    cy.get('#first-name').type('Marko');
    cy.get('#last-name').type('I');
    cy.get('#email').type('testMarko156@test.com');
    cy.get('#password').type('test1234');
    cy.get('#password-confirmation').type('test1234');
    cy.get(':checkbox').check();
    cy.get('button').click();
    cy.url().should('not.include', '/register');
  })

  it('Register with 255 Chars in the Last Name Input Field', () => {
    cy.visit('/register');
    cy.get('#first-name').type('Marko');
    cy.get('#last-name').type('nqoJHJfh9zwFm8ZdRYfLlfhBVAtWCLSeKgSFZJ4P1q63A18HXfqPyoJUGmacxtPZ1ZFpMzmbxkbfzWXRjrN3ETqo2nUXLuxRUtA84dSBw429o0DbxMWLWsjvLuiM8RZppE00k6eUqux8aHMgaC2KJGPf4B23NuCLhmPtdzQtsJEbC1PH0amdlaZONsDLrRfKbaj6aDG9ByjvIWzbEsrLX7simEI1pwKUpa63zJzxKA1T6ztWhFeQQhoY4bWuwMM');
    cy.get('#email').type('testMarko157@test.com');
    cy.get('#password').type('test1234');
    cy.get('#password-confirmation').type('test1234');
    cy.get(':checkbox').check();
    cy.get('button').click();
    cy.url().should('not.include', '/register');
  })

  it('Register by Providing Unicode Chars in the Last Name Input Field', () => {
    cy.visit('/register');
    cy.get('#first-name').type('Marko');
    cy.get('#last-name').type('ちびまる子ちゃん');
    cy.get('#email').type('testMarko158@test.com');
    cy.get('#password').type('test1234');
    cy.get('#password-confirmation').type('test1234');
    cy.get(':checkbox').check();
    cy.get('button').click();
    cy.url().should('not.include', '/register');
  })

  it('Register by Providing Letters with Spec Chars in the Last Name Input Field', () => {
    cy.visit('/register');
    cy.get('#first-name').type('Marko');
    cy.get('#last-name').type('O\'Bryan');
    cy.get('#email').type('testMarko159@test.com');
    cy.get('#password').type('test1234');
    cy.get('#password-confirmation').type('test1234');
    cy.get(':checkbox').check();
    cy.get('button').click();
    cy.url().should('not.include', '/register');
  })

  it('Register by Providing Alphanumeric Chars in the Last Name Input Field', () => {
    cy.visit('/register');
    cy.get('#first-name').type('Marko');
    cy.get('#last-name').type('Ilic 2');
    cy.get('#email').type('testMarko160@test.com');
    cy.get('#password').type('test1234');
    cy.get('#password-confirmation').type('test1234');
    cy.get(':checkbox').check();
    cy.get('button').click();
    cy.url().should('not.include', '/register');
  })

  it('Register with Unnecessary Spaces in the Last Name Input Field', () => {
    cy.visit('/register');
    cy.get('#first-name').type('Marko');
    cy.get('#last-name').type('         Ilic       ');
    cy.get('#email').type('testMarko161@test.com');
    cy.get('#password').type('test1234');
    cy.get('#password-confirmation').type('test1234');
    cy.get(':checkbox').check();
    cy.get('button').click();
    cy.url().should('not.include', '/register');
  })

  it('Register by Providing Password That Includes Whitespace', () => {
    cy.visit('/register');
    cy.get('#first-name').type('Marko');
    cy.get('#last-name').type('Ilic');
    cy.get('#email').type('testMarko162@test.com');
    cy.get('#password').type('test 1234');
    cy.get('#password-confirmation').type('test 1234');
    cy.get(':checkbox').check();
    cy.get('button').click();
    cy.url().should('not.include', '/register');
  })

  it('Register by Providing 8 Numbers in the Password Field', () => {
    cy.visit('/register');
    cy.get('#first-name').type('Marko');
    cy.get('#last-name').type('Ilic');
    cy.get('#email').type('testMarko133@test.com');
    cy.get('#password').type('12345678');
    cy.get('#password-confirmation').type('12345678');
    cy.get(':checkbox').check();
    cy.get('button').click();
    cy.url().should('not.include', '/register');
  })

})