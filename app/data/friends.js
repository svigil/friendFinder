// friends currently in database (these user's scores will be compared against the newFriend's scores to determine the bestMatch)
var friends = [
    {
        name: "Chill Chris",
        photo: "https://images.unsplash.com/photo-1531314888229-c4b4682c3118?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=99a893184a641b6be2a76fcdaa89e5a3&auto=format&fit=crop&w=500&q=60",
        scores: [4, 3, 3, 1, 4, 3, 3, 2, 4, 2]
    },
    {
        name: "Eyes on me Erin",
        photo: "https://images.unsplash.com/photo-1525801685241-dca7665f330f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2173233a211012dbe00d3e6cb57aece0&auto=format&fit=crop&w=500&q=60",
        scores: [5, 4, 3, 2, 2, 5, 3, 1, 4, 2]
    },
    {
        name: "Just Wade",
        photo: "https://images.unsplash.com/photo-1520410006060-eb5c4710b802?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=391df5f15b256270bbfbb841c7a8fa06&auto=format&fit=crop&w=500&q=60",
        scores: [3, 4, 4, 4, 4, 4, 4, 1, 5, 1]
    },
    {
        name: "Trendy Tara",
        photo: "https://images.unsplash.com/photo-1525450824786-227cbef70703?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a03222e6001ba28d1c6021b5ff79b643&auto=format&fit=crop&w=500&q=60",
        scores: [3, 4, 3, 2, 5, 1, 4, 3, 3, 3]
    },
    {
        name: "Festival Faith",
        photo: "https://images.unsplash.com/photo-1502877828070-33b167ad6860?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=058399e6b77c2433df4eb65d3a42e45e&auto=format&fit=crop&w=500&q=60",
        scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
    },
    {
        name: "Snarky Sarah",
        photo: "https://images.unsplash.com/photo-1502031882019-24c0bccfffc6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0383ab84e2f1ea5675cbcb932f5b297d&auto=format&fit=crop&w=500&q=60",
        scores: [1, 3, 5, 5, 5, 2, 5, 4, 2, 1]
    },
    {
        name: "Oh hey, I'm Annette",
        photo: "https://images.unsplash.com/photo-1528151406837-4745fbcd9f70?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4ea97dbd488bea0bf574d663c8f2cfd2&auto=format&fit=crop&w=500&q=60",
        scores: [3, 5, 1, 1, 5, 2, 5, 5, 2, 2]
    },
    {
        name: "Hippie Harriet",
        photo: "https://images.unsplash.com/photo-1531273493280-e49923740160?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ffc2421cca69d705d36048c97ec6149&auto=format&fit=crop&w=500&q=60",
        scores: [5, 2, 3, 3, 3, 3, 3, 3, 1, 5]
    },
    {
        name: "Ahhhhh Able",
        photo: "https://images.unsplash.com/photo-1528151215936-7ee1b5427d7e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8efa7da1fa32f635ebd349a12426393c&auto=format&fit=crop&w=500&q=60",
        scores: [3, 5, 3, 3, 5, 2, 5, 3, 2, 3]
    },
    {
        name: "Contemplative Carl",
        photo: "https://images.unsplash.com/photo-1495347353326-f1e32ba8e136?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a51e402e16cbe258a8e00e4f4f384db7&auto=format&fit=crop&w=1350&q=80",
        scores: [1, 5, 2, 5, 5, 2, 5, 5, 2, 5]
    },
];

module.exports = friends;