const sassyBot = () =>
{
    const response = [];
    const subject = ['I', 'They', 'We'];
    const verb = ['cannot', 'do not', 'will not'];
    const object = ['listen to your nonsense.', 'with you humon...', 'understand pointless words.'];

    response.push(subject[Math.floor(Math.random() * subject.length)]);
    response.push(verb[Math.floor(Math.random() * verb.length)]);
    response.push(object[Math.floor(Math.random() * object.length)]);

    return response.join(' ');
}

console.log(sassyBot());