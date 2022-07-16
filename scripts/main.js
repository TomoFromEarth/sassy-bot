
// function to return our random message
const onButtonClick = () =>
{
    const generateRandomSentence = () =>
    {
        const response = [];
        
        const subject = ['I', 'We', 'You', 'As a certified JEEN-yus, I', 'Clearly, I', 'Do you really think that I', 'It is shocking that you thought I'];
        
        const verb = ['cannot', 'do not', 'will not', 'probably will not'];
        
        const object = ['listen to your nonsense.', 'with you humon...', 'with me humon...', 'with us humon...', 'understand pointless words.', 'listen to my nonsense.', 'listen to our nonsense.'];

        response.push(subject[Math.floor(Math.random() * subject.length)]);
        
        response.push(verb[Math.floor(Math.random() * verb.length)]);
        
        response.push(object[Math.floor(Math.random() * object.length)]);
        
        const result = response.join(' ');
        return result;
    };

    document.querySelector('#message-container').innerHTML = generateRandomSentence();
};