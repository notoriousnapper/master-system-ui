const LIST_CONFIG = { // TODO: Move this to a file locally
    container: {
        name: "Morning' Sunshine",
            className: "list"
    },
    adapter: {
    },
    node: {
        nodeCount : 3, // means expect 3 different types of
            isStrict : true,
            labelName: "",
            hasLabel: false
    }
};
// Ugly Code
const workoutsByDay = [
    ["Arms", "1000"], // Sunday // TODO: APP FAILS if name not recognized (below logic)
    ["Run", "Chest/Back"], // Monday
    ["Rest", "Run"],
    ["Arms"],
    ["1000"],
    ["Legs"], // Wednesday
    ["Rest"],
    ["Arms"],
];