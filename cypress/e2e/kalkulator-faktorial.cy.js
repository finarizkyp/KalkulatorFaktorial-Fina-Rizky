
describe('Website Faktorial', () => {

    it('ID#001', function() {
      cy.visit('https://qa.putraprima.id/#')
      cy.get('h5').should('have.contain', 'Kalkulator Faktorial').wait(2000)
    })

    it('ID#002', function() {
        cy.visit('https://qa.putraprima.id/#')
     cy.get('[placeholder = "Masukkan Angka"]').type("0")
      cy.contains('Hitung Faktorial').click()
      cy.get('[id="result"]').should('have.contain', 'Faktorial dari 0 adalah: 1').wait(2000)
    })

    it('ID#003', function() {
        cy.visit('https://qa.putraprima.id/#')
        cy.get('[placeholder = "Masukkan Angka"]').clear()
	cy.get('[placeholder = "Masukkan Angka"]').type("5")
	cy.contains('Hitung Faktorial').click()
	cy.get('[id="result"]').should('have.contain', 'Faktorial dari 5 adalah: 120').wait(2000)
    })

    it('ID#004', function() {
        cy.visit('https://qa.putraprima.id/#')
        cy.get('[placeholder = "Masukkan Angka"]').clear()
	cy.get('[placeholder = "Masukkan Angka"]').type("11")
	cy.contains('Hitung Faktorial').click()
	cy.get('[id="result"]').should('have.contain', 'Faktorial dari 11 adalah: 39916800').wait(2000)

    })

    it('ID#005', function() {
        cy.visit('https://qa.putraprima.id/#')
        cy.get('[placeholder = "Masukkan Angka"]').clear()
	cy.get('[placeholder = "Masukkan Angka"]').type("22")
	cy.contains('Hitung Faktorial').click()
	cy.get('[id="result"]').should('have.contain', 'Faktorial dari 22 adalah: 1.1240007277776077e+21').wait(2000)

    })

    it('ID#006', function() {
        cy.visit('https://qa.putraprima.id/#')
        cy.get('[placeholder = "Masukkan Angka"]').clear()
	cy.get('[placeholder = "Masukkan Angka"]').type("AB")
	cy.contains('Hitung Faktorial').click()
	cy.get('[id="result"]').should('have.contain', 'Please enter an integer').wait(2000)

    })

    it('ID#007', function() {
        cy.visit('https://qa.putraprima.id/#')
        cy.get('[placeholder = "Masukkan Angka"]').clear()
	cy.get('[placeholder = "Masukkan Angka"]').type("xy")
	cy.contains('Hitung Faktorial').click()
	cy.get('[id="result"]').should('have.contain', 'Please enter an integer').wait(2000)

    })

    it('ID#008', function() {
        cy.visit('https://qa.putraprima.id/#')
        cy.get('[placeholder = "Masukkan Angka"]').clear()
	cy.get('[placeholder = "Masukkan Angka"]').type("2B")
	cy.contains('Hitung Faktorial').click()
	cy.get('[id="result"]').should('have.contain', 'Please enter an integer').wait(2000)

    })

    it('ID#009', function() {
        cy.visit('https://qa.putraprima.id/#')
        cy.get('[placeholder = "Masukkan Angka"]').clear()
	cy.get('[placeholder = "Masukkan Angka"]').type("!")
	cy.contains('Hitung Faktorial').click()
	cy.get('[id="result"]').should('have.contain', 'Please enter an integer').wait(2000)

    })

    it('ID#0010', function() {
        cy.visit('https://qa.putraprima.id/#')
        cy.get('[placeholder = "Masukkan Angka"]').clear()
	cy.get('[placeholder = "Masukkan Angka"]').type("{}")
	cy.contains('Hitung Faktorial').click()
	cy.get('[id="result"]').should('have.contain', 'Please enter an integer').wait(2000)

    })

    it('ID#0011', function() {
        cy.visit('https://qa.putraprima.id/#')
        cy.get('[placeholder = "Masukkan Angka"]').clear()
	cy.get('[placeholder = "Masukkan Angka"]').type("8&")
	cy.contains('Hitung Faktorial').click()
	cy.get('[id="result"]').should('have.contain', 'Please enter an integer').wait(2000)

    })

    it('ID#0012', function() {
        cy.visit('https://qa.putraprima.id/#')
        cy.get('[placeholder = "Masukkan Angka"]').clear()
	cy.get('[id="result"]').should('not.have.value').wait(2000)

    })


      })

    