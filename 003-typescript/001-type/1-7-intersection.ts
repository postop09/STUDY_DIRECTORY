{
    /**
     * Intersection Types
     * AND 와 비슷하다. (Union Types 와 반대적인 개념)
     */

    type Student = {
        name: string;
        score: number;
    }

    type Worker = {
        employeeId: number;
        work: () => void
    }

    function interWork(person: Student & Worker) {
        console.log(person.name, person.employeeId, person.work())
    }

    interWork({
        name: "SIK",
        score: 99,
        employeeId: 14148,
        work: () => {}
    })
}