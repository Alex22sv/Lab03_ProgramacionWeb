const countVotes = (votes) => {
    let candidates = {};
    votes.forEach(vote => {
        candidates[vote.candidate] = (candidates[vote.candidate] || 0) + 1;  
    });
    return candidates;
}

const showResults = (result) => {
    alert("Results: ");
    for(let candidate in result){
        alert(`${candidate}: ${result[candidate]} vote(s)`)
    }
}

const main = () => {
    let votes = [
        { candidate: 'Alice' },
        { candidate: 'Bob' },
        { candidate: 'Alice' },
        { candidate: 'Alice' },
        { candidate: 'Bob' },
        { candidate: 'Alex'}
    ];
    const result = countVotes(votes);
    showResults(result)
}

main();
