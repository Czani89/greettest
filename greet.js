describe('this test', function () {
    it('should set the name "cinga"', function () {
        let greetInst = greet();
        greetInst.setName("Cinga")

        assert.equal(greetInst.getName(), "cinga");
    });
    it('should greet the name "Cinga" in English', function () {
        let greetInst = greet();

        assert.equal(greetInst.languages("english", "Cinga"), "Good morning, Cinga!");
    });
    it('should greet the name "Cinga" in Afrikaans', function () {
        let greetInst = greet();

        assert.equal(greetInst.languages("afrikaans", "Cinga"), "Goeie more, Cinga!");
    });
    it('should greet the name "Cinga" in IsiXhosa', function () {
        let greetInst = greet();

        assert.equal(greetInst.languages("xhosa", "Cinga"), "Molo, Cinga!");
    });
    it('should return a list of people greeted, each person appearing once', function () {
        let greetInst = greet();

        greetInst.setName("namhla")
        greetInst.setName("namhla")
        greetInst.setName("nzwaki")
        greetInst.setName("lebepe")
        greetInst.setName("cinga")
        greetInst.setName("Cinga")
        greetInst.setName("NZWAKI")

        assert.deepEqual(greetInst.newMap(), { namhla: 0, nzwaki: 0, lebepe: 0, cinga: 0 });
    });
    it('should return the number of people greeted, each person greeted only registering once', function () {
        let greetInst = greet();

        greetInst.setName("namhla")
        greetInst.setName("namhla")
        greetInst.setName("nzwaki")
        greetInst.setName("lebepe")
        greetInst.setName("cinga")
        greetInst.setName("Cinga")
        greetInst.setName("NZWAKI")

        assert.deepEqual(greetInst.counter(), 4);
    });

});