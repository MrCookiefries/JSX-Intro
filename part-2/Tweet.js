const Tweet = ({
    username = "user1234",
    name = "person",
    date = "today",
    message = "some tweet content"
}) => (
    <figure>
        <h2>{username} - {name}</h2>
        <small>{date}</small>
        <p>{message}</p>
    </figure>
);
