/// <reference types="Cypress" />

describe('Register Negative Test Cases', () => {

  it('Register Without Providing Data', () => {
      cy.visit('/register');
      cy.get('button').click();
      cy.url().should('include', '/register');
  })

  it('Register by Only Checking the Checkbox', () => {
      cy.visit('/register');
      cy.get(':checkbox').check();
      cy.get('button').click();
      cy.url().should('include', '/register');
  })

  it('Register by Only Providing the First Name', () => {
      cy.visit('/register');
      cy.get('#first-name').type('Marko');
      cy.get('button').click();
      cy.url().should('include', '/register');
  })

  it('Register by Only Providing the First Name and Last Name', () => {
      cy.visit('/register');
      cy.get('#first-name').type('Marko');
      cy.get('#last-name').type('Ilic');
      cy.get('button').click();
      cy.url().should('include', '/register');
  })

  it('Register by Only Providing the First Name, Last Name and E-mail', () => {
      cy.visit('/register');
      cy.get('#first-name').type('Marko');
      cy.get('#last-name').type('Ilic');
      cy.get('#email').type('850@test.com');
      cy.get('button').click();
      cy.url().should('include', '/register');
  })

  it('Register by Only Providing the First Name, Last Name, Email and Password', () => {
      cy.visit('/register');
      cy.get('#first-name').type('Marko');
      cy.get('#last-name').type('Ilic');
      cy.get('#email').type('testMarko850@test.com');
      cy.get('#password').type('test1234');
      cy.get('button').click();
      cy.url().should('include', '/register');
  })

  it('Register by Providing All Data But Not Checking the Checkbox', () => {
      cy.visit('/register');
      cy.get('#first-name').type('Marko');
      cy.get('#last-name').type('Ilic');
      cy.get('#email').type('testMarko250@test.com');
      cy.get('#password').type('test1234');
      cy.get('#password-confirmation').type('test1234');
      cy.url().should('include', '/register');
  })

  it('Register with 256 Chars in the First Name Input Field', () => {
      cy.visit('/register');
      cy.get('#first-name').type('JNulu759iwfSAyVG2T1CAmENb7lJq4S1mMHDiXHcoGNvtVKL6RLARtsCmqviMexsYD7Iw4SZtCkVoXpp4RMvjio2RALc7vx8MQbFt8tHDVsiVJyRsu0QKr3ueRystrPkk9RdloiODDJ2QfpDwMpc3ahEjzH6igXOey2fhH8Pu6l1s7eUUgFcmffjqDiK5KMSODHawmK6mV9gqlDISgz7un5LRFiSJ4DsAOBOMNPVXap7ZlMNoAVba9S86oOwMkp2');
      cy.get('#last-name').type('Ilic');
      cy.get('#email').type('testMarko250@test.com');
      cy.get('#password').type('test1234');
      cy.get('#password-confirmation').type('test1234');
      cy.get(':checkbox').check();
      cy.get('button').click();
      cy.url().should('include', '/register');
  })

  it('Register by Providing Whitespace in the First Name Input Field', () => {
      cy.visit('/register');
      cy.get('#first-name').type(' ');
      cy.get('#last-name').type('Ilic');
      cy.get('#email').type('testMarko250@test.com');
      cy.get('#password').type('test1234');
      cy.get('#password-confirmation').type('test1234');
      cy.get(':checkbox').check();
      cy.get('button').click();
      cy.url().should('include', '/register');
  })

  it('Register by Providing Only Numbers in the First Name Input Field', () => {
      cy.visit('/register');
      cy.get('#first-name').type('0123456789');
      cy.get('#last-name').type('Ilic');
      cy.get('#email').type('testMarko251@test.com');
      cy.get('#password').type('test1234');
      cy.get('#password-confirmation').type('test1234');
      cy.get(':checkbox').check();
      cy.get('button').click();
      cy.wait(5000);
      cy.url().should('include', '/register');
  })

  it('Register by Providing Only Special Chars in the First Name Input Field', () => {
      cy.visit('/register');
      cy.get('#first-name').type('!@#$%^&*()_+');
      cy.get('#last-name').type('Ilic');
      cy.get('#email').type('testMarko252@test.com');
      cy.get('#password').type('test1234');
      cy.get('#password-confirmation').type('test1234');
      cy.get(':checkbox').check();
      cy.get('button').click();
      cy.wait(5000);
      cy.url().should('include', '/register');
  })

  it('Register with 256 Chars in the Last Name Input Field', () => {
      cy.visit('/register');
      cy.get('#first-name').type('Marko');
      cy.get('#last-name').type('nqoJHJfh9zwFm8ZdRYfLlfhBVAtWVCLSeKgSFZJ4P1q63A18HXfqPyoJUGmacxtPZ1ZFpMzmbxkbfzWXRjrN3ETqo2nUXLuxRUtA84dSBw429o0DbxMWLWsjvLuiM8RZppE00k6eUqux8aHMgaC2KJGPf4B23NuCLhmPtdzQtsJEbC1PH0amdlaZONsDLrRfKbaj6aDG9ByjvIWzbEsrLX7simEI1pwKUpa63zJzxKA1T6ztWhFeQQhoY4bWuwMM');
      cy.get('#email').type('testMarko850@test.com');
      cy.get('#password').type('test1234');
      cy.get('#password-confirmation').type('test1234');
      cy.get(':checkbox').check();
      cy.get('button').click();
      cy.url().should('include', '/register');
  })

  it('Register by Providing Whitespace in the Last Name Input Field', () => {
      cy.visit('/register');
      cy.get('#first-name').type('Marko');
      cy.get('#last-name').type(' ');
      cy.get('#email').type('testMarko250@test.com');
      cy.get('#password').type('test1234');
      cy.get('#password-confirmation').type('test1234');
      cy.get(':checkbox').check();
      cy.get('button').click();
      cy.url().should('include', '/register');
  })

  it('Register by Providing Only Numbers in the Last Name Input Field', () => {
      cy.visit('/register');
      cy.get('#first-name').type('Marko');
      cy.get('#last-name').type('0123456789');
      cy.get('#email').type('testMarko253@test.com');
      cy.get('#password').type('test1234');
      cy.get('#password-confirmation').type('test1234');
      cy.get(':checkbox').check();
      cy.get('button').click();
      cy.wait(5000);
      cy.url().should('include', '/register');
  })

  it('Register by Providing Only Special Chars in the Last Name Input Field', () => {
      cy.visit('/register');
      cy.get('#first-name').type('Marko');
      cy.get('#last-name').type('!@#$%^&*()_+');
      cy.get('#email').type('testMarko254@test.com');
      cy.get('#password').type('test1234');
      cy.get('#password-confirmation').type('test1234');
      cy.get(':checkbox').check();
      cy.get('button').click();
      cy.wait(5000);
      cy.url().should('include', '/register');
  })

  it('Register by Providing Whitespace in the Email Input Field', () => {
      cy.visit('/register');
      cy.get('#first-name').type('Marko');
      cy.get('#last-name').type('Ilic');
      cy.get('#email').type(' ');
      cy.get('#password').type('test1234');
      cy.get('#password-confirmation').type('test1234');
      cy.get(':checkbox').check();
      cy.get('button').click();
      cy.url().should('include', '/register');
  })

  it('Register by Not Including \'@\' in the Email Address', () => {
      cy.visit('/register');
      cy.get('#first-name').type('Marko');
      cy.get('#last-name').type('Ilic');
      cy.get('#email').type('testMarko250test.com');
      cy.get('#password').type('test1234')
      cy.get('#password-confirmation').type('test1234');
      cy.get(':checkbox').check();
      cy.get('button').click();
      cy.url().should('include', '/register')
  })

  it('Register by Not Including \'.\' in the Email Address', () => {
      cy.visit('/register');
      cy.get('#first-name').type('Marko');
      cy.get('#last-name').type('Ilic');
      cy.get('#email').type('testMarko250@testcom');
      cy.get('#password').type('test1234')
      cy.get('#password-confirmation').type('test1234');
      cy.get(':checkbox').check();
      cy.get('button').click();
      cy.url().should('include', '/register')
  })

  it('Register by Not Including Domain in the Email Address', () => {
      cy.visit('/register');
      cy.get('#first-name').type('Marko');
      cy.get('#last-name').type('Ilic');
      cy.get('#email').type('testMarko250@test.');
      cy.get('#password').type('test1234')
      cy.get('#password-confirmation').type('test1234');
      cy.get(':checkbox').check();
      cy.get('button').click();
      cy.url().should('include', '/register')
  })

  it('Register by Not Including Username in the Email Address', () => {
      cy.visit('/register');
      cy.get('#first-name').type('Marko');
      cy.get('#last-name').type('Ilic');
      cy.get('#email').type('@test.com');
      cy.get('#password').type('test1234')
      cy.get('#password-confirmation').type('test1234');
      cy.get(':checkbox').check();
      cy.get('button').click();
      cy.url().should('include', '/register')
  })

  it('Register with an Already Existing Email Address', () => {
      cy.visit('/register');
      cy.get('#first-name').type('Marko');
      cy.get('#last-name').type('Ilic');
      cy.get('#email').type('testMarko900@test.com');
      cy.get('#password').type('test1234')
      cy.get('#password-confirmation').type('test1234');
      cy.get(':checkbox').check();
      cy.get('button').click();
      cy.url().should('include', '/register')
  })

  it('Register by Providing Only 1 Char in the Password and Confirmed Password Fields', () => {
      cy.visit('/register');
      cy.get('#first-name').type('Marko');
      cy.get('#last-name').type('Ilic');
      cy.get('#email').type('testMarko250@test.com');
      cy.get('#password').type('t');
      cy.get('#password-confirmation').type('t');
      cy.get(':checkbox').check();
      cy.get('button').click();
      cy.url().should('include', '/register');
  })

  it('Register by Providing Only 7 Char in the Password and Confirmed Password Fields', () => {
      cy.visit('/register');
      cy.get('#first-name').type('Marko');
      cy.get('#last-name').type('Ilic');
      cy.get('#email').type('testMarko250@test.com');
      cy.get('#password').type('test123');
      cy.get('#password-confirmation').type('test123');
      cy.get(':checkbox').check();
      cy.get('button').click();
      cy.url().should('include', '/register');
  })

  it('Register by Providing Only Letters in the Password and Confirmed Password Fields', () => {
      cy.visit('/register');
      cy.get('#first-name').type('Marko');
      cy.get('#last-name').type('Ilic');
      cy.get('#email').type('testMarko250@test.com');
      cy.get('#password').type('testtest');
      cy.get('#password-confirmation').type('testtest');
      cy.get(':checkbox').check();
      cy.get('button').click();
      cy.url().should('include', '/register');
  })

  it('Register by Not Providing the Same Password in the Confirmed Password Input Field', () => {
      cy.visit('/register');
      cy.get('#first-name').type('Marko');
      cy.get('#last-name').type('Ilic');
      cy.get('#email').type('testMarko250@test.com');
      cy.get('#password').type('test1234');
      cy.get('#password-confirmation').type('1234test');
      cy.get(':checkbox').check();
      cy.get('button').click();
      cy.url().should('include', '/register');
  })

})

