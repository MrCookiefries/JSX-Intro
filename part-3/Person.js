const Person = ({
    name = "person",
    age = 20,
    hobbies = ["none"]
}) => (
    <div>
        <p>Learn some information about this person.</p>
        <ul>
            <li>
                <strong>Name </strong>
                {name.length > 8 ? name.substring(0, 6): name}
            </li>
            <li><strong>Age </strong>{age}</li>
        </ul>
        <h3>
            {age >= 18 ? "please go vote!": "you must be 18"}
        </h3>
        <p>Hobbies</p>
        <ul>
            {hobbies.map(h => <li>{h}</li>)}
        </ul>
    </div>
);
