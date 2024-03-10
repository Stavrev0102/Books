const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./server');

const expect = chai.expect;

chai.use(chaiHttp);

describe('Books Api tests', () => {
    it('POST Book', (done) => {
        const body = {
            id: "1",
            title:'Test Book1',
            author:'Ivaylo Stavrev'
        }
        chai.request(server)
            .post('/books')
            .send(body)
            .end((err, resp) => {
                if(err){
                    return done(err)
                }
                expect(resp.statusCode).to.equal(201)
                done()
            })
    })  
    
    it('GET a single book', (done) => {

        chai.request(server)
            .get('/books/1')
            .end((err,resp) => {
                if(err){
                    return done(err)
                }
                expect(resp.statusCode).to.equal(200);
                done()
            })
    })
})
