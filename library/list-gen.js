

/*
  1. Grab Data
  2. Iterate Data properly & Parse  into JSON form
        = How do you want to parse complex data
            main item:
  3. Create components in html & connect
  4. Inject into an element
 */


// easy options - set name,
function createConfig(configObject){
}
let config = {
    container: {
        name: "Exercise",
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
function generateListHTML(list, config){
    // Create Central Div
    // set inner Text configs
    // className, text, size, etc. // assume
    var container = document.createElement("ul");
    container.innerHTML = config.container.name;
    container.className = config.container.className;

    // Create List Nodes with individual elements
    // either dynamic, or inject html templates to use! etc.
    // Use Adapter before or in here
    // 3 points per node, evenly spaced for now
    // one option (dataType)
    // let nodeCount = 3; // means expect 3 different types of
    // let isStrict = false;

    console.log(list);
    list.map((data)=>{
        container.appendChild(generateListNodeHTML(data, config.node));
        // Add changes at this level (logic? TODO:
    });
    return container;

    // REALIZIATION: Have 2 options for now, either super dynamic, or a template to follow, and sth between later
    // info/ strict = must, other wise = empty
    // Have a template example in your mind
    // Art stuff later


}



/*
 * GENERAL Function for data, so data is just an string array
 * TODO: Java might be better for these checks - rewrite in future
 *  Has corresponding CSS (Need to do some diagrams to explain this shit
 *  Also need a way to open-source/ save my diagrams to cloud/ cleaner
 */
function generateListNodeHTML(data, nodeConfig){
    var container = document.createElement("li");
    // Here comes strict or not strict.
    // if strict, -- just have one part of data
    // if not, then -- print as much data as possible
    // TODO: Improve performance & conciseness later.
    for (let i = 0; i < nodeConfig.nodeCount && i < data.length; i++){
        // TODO: Add strict check/ dynamic later
        var node =  document.createElement("div");
        node.innerHTML += data[i];
        node.className = "list-node";
        container.appendChild(node)
        // beginning is set/ padding
    }
    return container;
}

/* Adapter function for transforming data */
function adaptListData(option, data) {
    let fields = [];
    let adaptedData = {};
    let firstSet = data[0];

    // Gather fields
    for (var key in firstSet) {
        fields.push(key);
        console.log("key: " + key);
    }


    // Create Template
    fields.map((field) => {
        /* let dataObject = {} */
        ;
        adaptedData[field] = [];
    });
    console.log("whole data: " + JSON.stringify(adaptedData, null, 4));
    console.log("whole fields: " + fields);

    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < fields.length; j++) {
            let targetData = data[i][fields[j]];
            let targetGroup = adaptedData[fields[j]]
            targetGroup.push(
                [targetData] // TODO: Format must be like this --> look at generateListNodeHTML
            );
        }
    }
    return {
        data: adaptedData,
        fields: fields
    };
}



