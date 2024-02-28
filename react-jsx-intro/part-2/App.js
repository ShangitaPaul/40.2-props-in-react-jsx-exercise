function App() {
    return (
        <div>
            <Tweet username="User1" name="user1" date={new Date().toDateString()} message="This is a tweet" />
            <Tweet username="User2" name="user2" date={new Date().toDateString()} message="This is a tweet" />
            <Tweet username="User3" name="user3" date={new Date().toDateString()} message="This is a tweet" />
        </div>
    );
}

