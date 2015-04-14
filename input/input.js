var com = { qmino : { miredot : {}}};
com.qmino.miredot.restApiSource = {"validLicence":true,"buildSystem":"maven 3","allowUsageTracking":true,"licenceErrorMessage":null,"miredotRevision":"25e24200396c","jsonDocHidden":true,"licenceHash":"96920848577151415","miredotVersion":"1.5.1","jsonDocEnabled":false,"dateOfGeneration":"2015-04-14 10:19:59","licenceType":"FREE","projectName":"cyREST","projectVersion":"0.9.15","projectTitle":"RESTful API for Cytoscape v1"};
com.qmino.miredot.restApiSource.tos = {
	org_cytoscape_rest_internal_model_Elements_in: { "type": "complex", "name": "org_cytoscape_rest_internal_model_Elements_in", "content": [] },
	org_cytoscape_rest_internal_model_Elements_out: { "type": "complex", "name": "org_cytoscape_rest_internal_model_Elements_out", "content": [] },
	org_cytoscape_rest_internal_model_Node_in: { "type": "complex", "name": "org_cytoscape_rest_internal_model_Node_in", "content": [] },
	org_cytoscape_rest_internal_model_Node_out: { "type": "complex", "name": "org_cytoscape_rest_internal_model_Node_out", "content": [] },
	org_cytoscape_rest_internal_model_ServerStatus_in: { "type": "complex", "name": "org_cytoscape_rest_internal_model_ServerStatus_in", "content": [] },
	org_cytoscape_rest_internal_model_ServerStatus_out: { "type": "complex", "name": "org_cytoscape_rest_internal_model_ServerStatus_out", "content": [] },
	org_cytoscape_rest_internal_model_CyJsNetwork_in: { "type": "complex", "name": "org_cytoscape_rest_internal_model_CyJsNetwork_in", "content": [] },
	org_cytoscape_rest_internal_model_CyJsNetwork_out: { "type": "complex", "name": "org_cytoscape_rest_internal_model_CyJsNetwork_out", "content": [] },
	org_cytoscape_rest_internal_model_NodeData_in: { "type": "complex", "name": "org_cytoscape_rest_internal_model_NodeData_in", "content": [] },
	org_cytoscape_rest_internal_model_NodeData_out: { "type": "complex", "name": "org_cytoscape_rest_internal_model_NodeData_out", "content": [] },
	org_cytoscape_rest_internal_model_NetworkData_in: { "type": "complex", "name": "org_cytoscape_rest_internal_model_NetworkData_in", "content": [] },
	org_cytoscape_rest_internal_model_NetworkData_out: { "type": "complex", "name": "org_cytoscape_rest_internal_model_NetworkData_out", "content": [] },
	org_cytoscape_rest_internal_model_Edge_in: { "type": "complex", "name": "org_cytoscape_rest_internal_model_Edge_in", "content": [] },
	org_cytoscape_rest_internal_model_Edge_out: { "type": "complex", "name": "org_cytoscape_rest_internal_model_Edge_out", "content": [] },
	org_cytoscape_rest_internal_model_EdgeData_in: { "type": "complex", "name": "org_cytoscape_rest_internal_model_EdgeData_in", "content": [] },
	org_cytoscape_rest_internal_model_EdgeData_out: { "type": "complex", "name": "org_cytoscape_rest_internal_model_EdgeData_out", "content": [] },
	org_cytoscape_rest_internal_model_MemoryStatus_in: { "type": "complex", "name": "org_cytoscape_rest_internal_model_MemoryStatus_in", "content": [] },
	org_cytoscape_rest_internal_model_MemoryStatus_out: { "type": "complex", "name": "org_cytoscape_rest_internal_model_MemoryStatus_out", "content": [] },
	org_cytoscape_rest_internal_model_CytoscapeVersion_in: { "type": "complex", "name": "org_cytoscape_rest_internal_model_CytoscapeVersion_in", "content": [] },
	org_cytoscape_rest_internal_model_CytoscapeVersion_out: { "type": "complex", "name": "org_cytoscape_rest_internal_model_CytoscapeVersion_out", "content": [] }
};

com.qmino.miredot.restApiSource.enums = {
	javax_ws_rs_core_Response$Status: { "type": "enum", "name": "javax_ws_rs_core_Response$Status", "values": ["OK", "Created", "Accepted", "No Content", "Reset Content", "Partial Content", "Moved Permanently", "Found", "See Other", "Not Modified", "Use Proxy", "Temporary Redirect", "Bad Request", "Unauthorized", "Payment Required", "Forbidden", "Not Found", "Method Not Allowed", "Not Acceptable", "Proxy Authentication Required", "Request Timeout", "Conflict", "Gone", "Length Required", "Precondition Failed", "Request Entity Too Large", "Request-URI Too Long", "Unsupported Media Type", "Requested Range Not Satisfiable", "Expectation Failed", "Internal Server Error", "Not Implemented", "Bad Gateway", "Service Unavailable", "Gateway Timeout", "HTTP Version Not Supported"]}
};
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_Elements_in"].content = [ 
	{
		"name": "nodes",
		"comment": null,
		"typeValue": { "type": "collection", "typeValue":com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_Node_in"] },
		"deprecated": false
	},
	{
		"name": "edges",
		"comment": null,
		"typeValue": { "type": "collection", "typeValue":com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_Edge_in"] },
		"deprecated": false}
];
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_Elements_in"].ordered = false;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_Elements_in"].comment = null;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_Elements_out"].content = [ 
	{
		"name": "nodes",
		"comment": null,
		"typeValue": { "type": "collection", "typeValue":com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_Node_out"] },
		"deprecated": false
	},
	{
		"name": "edges",
		"comment": null,
		"typeValue": { "type": "collection", "typeValue":com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_Edge_out"] },
		"deprecated": false}
];
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_Elements_out"].ordered = false;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_Elements_out"].comment = null;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_Node_in"].content = [ 
	{
		"name": "data",
		"comment": null,
		"typeValue": com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_NodeData_in"],
		"deprecated": false}
];
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_Node_in"].ordered = false;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_Node_in"].comment = null;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_Node_out"].content = [ 
	{
		"name": "data",
		"comment": null,
		"typeValue": com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_NodeData_out"],
		"deprecated": false}
];
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_Node_out"].ordered = false;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_Node_out"].comment = null;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_ServerStatus_in"].content = [ 
	{
		"name": "apiVersion",
		"comment": null,
		"typeValue": { "type": "simple", "typeValue": "string" },
		"deprecated": false
	},
	{
		"name": "numberOfCores",
		"comment": null,
		"typeValue": { "type": "simple", "typeValue": "number" },
		"deprecated": false
	},
	{
		"name": "memoryStatus",
		"comment": null,
		"typeValue": com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_MemoryStatus_in"],
		"deprecated": false}
];
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_ServerStatus_in"].ordered = false;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_ServerStatus_in"].comment = null;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_ServerStatus_out"].content = [ 
	{
		"name": "memoryStatus",
		"comment": null,
		"typeValue": com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_MemoryStatus_out"],
		"deprecated": false
	},
	{
		"name": "numberOfCores",
		"comment": null,
		"typeValue": { "type": "simple", "typeValue": "number" },
		"deprecated": false
	},
	{
		"name": "apiVersion",
		"comment": null,
		"typeValue": { "type": "simple", "typeValue": "string" },
		"deprecated": false}
];
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_ServerStatus_out"].ordered = false;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_ServerStatus_out"].comment = null;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_CyJsNetwork_in"].content = [ 
	{
		"name": "data",
		"comment": null,
		"typeValue": com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_NetworkData_in"],
		"deprecated": false}
];
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_CyJsNetwork_in"].ordered = false;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_CyJsNetwork_in"].comment = null;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_CyJsNetwork_out"].content = [ 
	{
		"name": "elements",
		"comment": null,
		"typeValue": com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_Elements_out"],
		"deprecated": false
	},
	{
		"name": "data",
		"comment": null,
		"typeValue": com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_NetworkData_out"],
		"deprecated": false}
];
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_CyJsNetwork_out"].ordered = false;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_CyJsNetwork_out"].comment = null;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_NodeData_in"].content = [ 
	{
		"name": "id",
		"comment": null,
		"typeValue": { "type": "simple", "typeValue": "string" },
		"deprecated": false}
];
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_NodeData_in"].ordered = false;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_NodeData_in"].comment = null;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_NodeData_out"].content = [ 
	{
		"name": "id",
		"comment": null,
		"typeValue": { "type": "simple", "typeValue": "string" },
		"deprecated": false}
];
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_NodeData_out"].ordered = false;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_NodeData_out"].comment = null;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_NetworkData_in"].content = [ 

];
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_NetworkData_in"].ordered = false;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_NetworkData_in"].comment = null;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_NetworkData_out"].content = [ 

];
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_NetworkData_out"].ordered = false;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_NetworkData_out"].comment = null;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_Edge_in"].content = [ 
	{
		"name": "data",
		"comment": null,
		"typeValue": com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_EdgeData_in"],
		"deprecated": false}
];
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_Edge_in"].ordered = false;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_Edge_in"].comment = null;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_Edge_out"].content = [ 
	{
		"name": "data",
		"comment": null,
		"typeValue": com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_EdgeData_out"],
		"deprecated": false}
];
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_Edge_out"].ordered = false;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_Edge_out"].comment = null;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_EdgeData_in"].content = [ 
	{
		"name": "target",
		"comment": null,
		"typeValue": { "type": "simple", "typeValue": "string" },
		"deprecated": false
	},
	{
		"name": "source",
		"comment": null,
		"typeValue": { "type": "simple", "typeValue": "string" },
		"deprecated": false}
];
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_EdgeData_in"].ordered = false;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_EdgeData_in"].comment = null;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_EdgeData_out"].content = [ 
	{
		"name": "target",
		"comment": null,
		"typeValue": { "type": "simple", "typeValue": "string" },
		"deprecated": false
	},
	{
		"name": "source",
		"comment": null,
		"typeValue": { "type": "simple", "typeValue": "string" },
		"deprecated": false}
];
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_EdgeData_out"].ordered = false;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_EdgeData_out"].comment = null;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_MemoryStatus_in"].content = [ 

];
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_MemoryStatus_in"].ordered = false;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_MemoryStatus_in"].comment = null;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_MemoryStatus_out"].content = [ 
	{
		"name": "totalMemory",
		"comment": null,
		"typeValue": { "type": "simple", "typeValue": "number" },
		"deprecated": false
	},
	{
		"name": "freeMemory",
		"comment": null,
		"typeValue": { "type": "simple", "typeValue": "number" },
		"deprecated": false
	},
	{
		"name": "usedMemory",
		"comment": null,
		"typeValue": { "type": "simple", "typeValue": "number" },
		"deprecated": false
	},
	{
		"name": "maxMemory",
		"comment": null,
		"typeValue": { "type": "simple", "typeValue": "number" },
		"deprecated": false}
];
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_MemoryStatus_out"].ordered = false;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_MemoryStatus_out"].comment = null;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_CytoscapeVersion_in"].content = [ 

];
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_CytoscapeVersion_in"].ordered = false;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_CytoscapeVersion_in"].comment = null;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_CytoscapeVersion_out"].content = [ 
	{
		"name": "apiVersion",
		"comment": null,
		"typeValue": { "type": "simple", "typeValue": "string" },
		"deprecated": false
	},
	{
		"name": "cytoscapeVersion",
		"comment": null,
		"typeValue": { "type": "simple", "typeValue": "string" },
		"deprecated": false}
];
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_CytoscapeVersion_out"].ordered = false;
com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_CytoscapeVersion_out"].comment = null;
com.qmino.miredot.restApiSource.interfaces = [
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/nodes/{nodeId}",
		"http": "DELETE",
		"title": "Delete a node in the network",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": [],
		"roles": [],
		"output": {},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-1499255901",
		"inputs": {
                "PATH": [
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"},
                    {"name": "nodeId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Node SUID", "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "This returns a view for the network.",
		"url": "/v1/networks/{networkId}/views/first",
		"http": "GET",
		"title": "Convenience method to get the first view object.",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": ""},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-1601429362",
		"inputs": {
                "PATH": [{"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"}],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/groups/{groupNodeId}/collapse",
		"http": "GET",
		"title": "Collapse group nodes",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": [],
		"roles": [],
		"output": {},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-976711221",
		"inputs": {
                "PATH": [
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"},
                    {"name": "groupNodeId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Group node SUID", "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/styles/visualproperties",
		"http": "GET",
		"title": "Get all available Visual Properties",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Array of Visual Properties"},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-1430872912",
		"inputs": {
                "PATH": [],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "If body is empty, it simply creates new network from current selection. Otherwise, select from the list of SUID.",
		"url": "/v1/networks/{networkId}",
		"http": "POST",
		"title": "Create a subnetwork from selected nodes and edges",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": ["application/json"],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "SUID of the new network."},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 412, "comment": "Invalid JSON input."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-1010725178",
		"inputs": {
                "PATH": [{"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"}],
                "QUERY": [{"name": "title", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": null, "jaxrs": "QUERY"}],
                "BODY": [{"typeValue": { "type": "simple", "typeValue": "java.io.InputStream" }, "comment": null, "jaxrs": "BODY"}],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/tables/{tableType}/columns/{columnName}",
		"http": "DELETE",
		"title": "Delete a column in a table",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": [],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "javax.ws.rs.core.Response" }, "comment": null},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-48657391",
		"inputs": {
                "PATH": [
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"},
                    {"name": "tableType", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Table type: \"defaultnode\", \"defaultedge\" or \"defaultnetwork\"", "jaxrs": "PATH"},
                    {"name": "columnName", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Name of the column to be deleted", "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "The body should be the following format: <pre>\n [\n 	{\n 		\"visualPropertyDependnecy\" : \"DEPENDENCY_ID\",\n 		\"enabled\" : true or false\n 	}, ... {}\n ]\n </pre>",
		"url": "/v1/styles/{name}/dependencies",
		"http": "PUT",
		"title": "Set Visual Property Dependency flags",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": ["application/json"],
		"produces": ["application/json"],
		"roles": [],
		"output": {},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 412, "comment": "Invalid JSON input."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-1009277218",
		"inputs": {
                "PATH": [{"name": "name", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Name of Visual Style", "jaxrs": "PATH"}],
                "QUERY": [],
                "BODY": [{"typeValue": { "type": "simple", "typeValue": "java.io.InputStream" }, "comment": null, "jaxrs": "BODY"}],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/edges",
		"http": "GET",
		"title": "Get matching edges",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "collection", "typeValue":{ "type": "simple", "typeValue": "number" } }, "comment": "List of matched edge SUIDs. If no parameter is given, returns all edge SUIDs."},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "662589552",
		"inputs": {
                "PATH": [{"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"}],
                "QUERY": [
                    {"name": "column", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Optional. Edge table column name to be used for search.", "jaxrs": "QUERY"},
                    {"name": "query", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Optional. Search query.", "jaxrs": "QUERY"}
                ],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "List of all available layout algorithm names. This <strong>does not include yFiles</strong> algorithms due to license issues.",
		"url": "/v1/apply/layouts",
		"http": "GET",
		"title": "Get list of available layout algorithm names",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "collection", "typeValue":{ "type": "simple", "typeValue": "string" } }, "comment": "List of layout algorithm names."},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "160838297",
		"inputs": {
                "PATH": [],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/count",
		"http": "GET",
		"title": "Get number of networks in current session",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Number of networks in current Cytoscape session"},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-1936626815",
		"inputs": {
                "PATH": [],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/tables/{tableType}/columns/{columnName}",
		"http": "GET",
		"title": "Get all values in a column",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "All values under the specified column."},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "1653037714",
		"inputs": {
                "PATH": [
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"},
                    {"name": "tableType", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Table type (defaultnode, defaultedge or defaultnetwork)", "jaxrs": "PATH"},
                    {"name": "columnName", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Column name", "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/",
		"http": "DELETE",
		"title": "Delete all networks in current session",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": [],
		"roles": [],
		"output": {},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "1245674789",
		"inputs": {
                "PATH": [],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "To use this API, you need to know SUID of the CyNetworkView, in addition to CyNetwork SUID.",
		"url": "/v1/networks/{networkId}/views/{viewId}",
		"http": "GET",
		"title": "Get a network view",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "View in Cytoscape.js JSON. Currently, view information is (x, y) location only."},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "465131160",
		"inputs": {
                "PATH": [
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"},
                    {"name": "viewId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network View SUID", "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/tables/{tableType}/rows/{primaryKey}/{columnName}",
		"http": "GET",
		"title": "Get a value in the cell",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "object" }, "comment": "Value in the cell. String, Boolean, Number, or List."},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "1976423404",
		"inputs": {
                "PATH": [
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"},
                    {"name": "tableType", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Table type (defaultnode, defaultedge or defaultnetwork)", "jaxrs": "PATH"},
                    {"name": "primaryKey", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Name of primary key column", "jaxrs": "PATH"},
                    {"name": "columnName", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Name of the column", "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "Returns list of networks as an array of network SUID.",
		"url": "/v1/networks/",
		"http": "GET",
		"title": "Get SUID list of networks",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json; charset=UTF-8"],
		"roles": [],
		"output": {"typeValue": { "type": "collection", "typeValue":{ "type": "simple", "typeValue": "number" } }, "comment": "Matched networks as list of SUIDs. If no query is given, returns all network SUIDs."},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-1099067042",
		"inputs": {
                "PATH": [],
                "QUERY": [
                    {"name": "column", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Optional. Network table column name to be used for search.", "jaxrs": "QUERY"},
                    {"name": "query", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Optional. Search query.", "jaxrs": "QUERY"}
                ],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "Run System.gc(). In general, this is not necessary.",
		"url": "/v1/gc",
		"http": "GET",
		"title": "Force to run garbage collection to free up memory",
		"tags": ["Server status"],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-1471173272",
		"inputs": {
                "PATH": [],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/edges/{edgeId}",
		"http": "DELETE",
		"title": "Delete an edge in the network.",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": [],
		"roles": [],
		"output": {},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-118074146",
		"inputs": {
                "PATH": [
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"},
                    {"name": "edgeId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "SUID of the edge to be deleted", "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/tables/",
		"http": "GET",
		"title": "Get all tables assigned to the network",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "All tables in JSON"},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "578785109",
		"inputs": {
                "PATH": [{"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "network SUID", "jaxrs": "PATH"}],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/",
		"http": "GET",
		"title": "Get available REST API versions",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "map", "typeValue": { "type": "collection", "typeValue":{ "type": "simple", "typeValue": "string" } } }, "comment": "List of available REST API versions. Currently, v1 is the only available version."},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "1567347803",
		"inputs": {
                "PATH": [],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/edges/{edgeId}/{type}",
		"http": "GET",
		"title": "Get source/target node of an edge",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "SUID of the source/target node"},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "519563717",
		"inputs": {
                "PATH": [
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"},
                    {"name": "edgeId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Edge SUID", "jaxrs": "PATH"},
                    {"name": "type", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "\"source\" or \"target\"", "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "Get list of all Visual Style names. This may not be unique.",
		"url": "/v1/apply/styles",
		"http": "GET",
		"title": "Get list of all Visual Style names",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "collection", "typeValue":{ "type": "simple", "typeValue": "string" } }, "comment": "List of Visual Style names."},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "1450138716",
		"inputs": {
                "PATH": [],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/tables/count",
		"http": "GET",
		"title": "Get number of global tables",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Number of global tables."},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-26110140",
		"inputs": {
                "PATH": [],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/styles/count",
		"http": "GET",
		"title": "Get number of Visual Styles",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Number of Visual Styles available in current session."},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "1653011134",
		"inputs": {
                "PATH": [],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "By passing a list of key-value pairs for each Visual Property, update network view. The body should have the following JSON: <pre>\n [\n 		{\n 			\"visualProperty\": \"Visual Property Name, like NETWORK_BACKGROUND_PAINT\",\n 			\"value\": \"Serialized form of value, like 'red.'\"\n 		},\n 		...\n 		{}\n ]\n </pre> Note that this API directly set the value to the view objects, and once Visual Style applied, those values are overridden by the Visual Style.",
		"url": "/v1/networks/{networkId}/views/{viewId}/network",
		"http": "PUT",
		"title": "Update single network view value, such as background color or zoom level.",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": ["application/json"],
		"produces": [],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "javax.ws.rs.core.Response" }, "comment": null},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 412, "comment": "Invalid JSON input."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "239252351",
		"inputs": {
                "PATH": [
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"},
                    {"name": "viewId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network view SUID", "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [{"typeValue": { "type": "simple", "typeValue": "java.io.InputStream" }, "comment": null, "jaxrs": "BODY"}],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "To update the column name, you need to provide the parameters in the body: <pre>\n {\n 		\"oldName\": OLD_COLUMN_NAME,\n 		\"newName\": NEW_COLUMN_NAME\n }\n </pre> Both parameters are required.",
		"url": "/v1/networks/{networkId}/tables/{tableType}/columns",
		"http": "PUT",
		"title": "Update a column name",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": ["application/json"],
		"produces": [],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "javax.ws.rs.core.Response" }, "comment": null},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 412, "comment": "Invalid JSON input."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "189048185",
		"inputs": {
                "PATH": [
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"},
                    {"name": "tableType", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Table type: \"defaultnode\", \"defaultedge\" or \"defaultnetwork\"", "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [{"typeValue": { "type": "simple", "typeValue": "java.io.InputStream" }, "comment": null, "jaxrs": "BODY"}],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/styles/{name}/defaults",
		"http": "PUT",
		"title": "Update a default value for the Visual Property The body of the request should be a list of key-value pair: <pre>\n 		[\n 			{\n 				\"visualProperty\": VISUAL_PROPERTY_ID,\n 				\"value\": value\n 			}, ...\n 		]\n </pre>",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": com.qmino.miredot.restApiSource.enums["javax_ws_rs_core_Response$Status"], "comment": null},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 412, "comment": "Invalid JSON input."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "774617109",
		"inputs": {
                "PATH": [{"name": "name", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Name of the Visual Style", "jaxrs": "PATH"}],
                "QUERY": [],
                "BODY": [{"typeValue": { "type": "simple", "typeValue": "java.io.InputStream" }, "comment": null, "jaxrs": "BODY"}],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/groups/{groupNodeId}",
		"http": "GET",
		"title": "Get group for a node",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "A group where the node belongs to"},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-875567376",
		"inputs": {
                "PATH": [
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Networks SUID", "jaxrs": "PATH"},
                    {"name": "groupNodeId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": null, "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/nodes/{nodeId}",
		"http": "GET",
		"title": "Get a node",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_Node_out"], "comment": "Node with associated row data."},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-1092581726",
		"inputs": {
                "PATH": [
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"},
                    {"name": "nodeId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Node SUID", "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}",
		"http": "DELETE",
		"title": "Delete a network",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": [],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "javax.ws.rs.core.Response" }, "comment": null},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "878202141",
		"inputs": {
                "PATH": [{"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"}],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "Create new, empty column in an assigned table. This accepts the following object OR allay of this objects: <pre>\n 		{\n 			\"name\":\"COLUMN NAME\",\n 			\"type\":\"data type, Double, String, Boolean, Long, Integer\",\n 			\"immutable\": \"Optional: boolean value to specify immutable or not\",\n 			\"list\": \"Optional.  If true, return create List column for the given type.\"\n 		}\n </pre>",
		"url": "/v1/networks/{networkId}/tables/{tableType}/columns",
		"http": "POST",
		"title": "Create new column(s) in the table",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": ["application/json"],
		"produces": [],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "javax.ws.rs.core.Response" }, "comment": null},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 412, "comment": "Invalid JSON input."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-67693391",
		"inputs": {
                "PATH": [
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"},
                    {"name": "tableType", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Table type: \"defaultnode\", \"defaultedge\" or \"defaultnetwork\"", "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [{"typeValue": { "type": "simple", "typeValue": "java.io.InputStream" }, "comment": null, "jaxrs": "BODY"}],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/styles/{name}/defaults/{vp}",
		"http": "GET",
		"title": "Get a default value for the Visual Property",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Default value for the Visual Property"},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "978939159",
		"inputs": {
                "PATH": [
                    {"name": "name", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Name of Visual Style", "jaxrs": "PATH"},
                    {"name": "vp", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Unique ID of the Visual Property. This should be the unique ID of the VP.", "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/apply/styles/{styleName}/{networkId}",
		"http": "GET",
		"title": "Apply Visual Style to a network",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "javax.ws.rs.core.Response" }, "comment": "Success message."},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-1624881815",
		"inputs": {
                "PATH": [
                    {"name": "styleName", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Visual Style name (title)", "jaxrs": "PATH"},
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Target network SUID", "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "Fit an existing network view to current window.",
		"url": "/v1/apply/fit/{networkId}",
		"http": "GET",
		"title": "Fit network to the window",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "javax.ws.rs.core.Response" }, "comment": "Success message"},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-1608791223",
		"inputs": {
                "PATH": [{"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"}],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/views/{viewId}/{objectType}",
		"http": "GET",
		"title": "Get current values for a specific Visual Property",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": null},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-1722861795",
		"inputs": {
                "PATH": [
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"},
                    {"name": "viewId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "SUID of network view", "jaxrs": "PATH"},
                    {"name": "objectType", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "nodes or edges", "jaxrs": "PATH"}
                ],
                "QUERY": [{"name": "visualProperty", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Unique name of a Visual Property", "jaxrs": "QUERY"}],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "Create a new Visual Mapping function from JSON and add it to the Style. <h3>Discrete Mapping</h3> <h3>Continuous Mapping</h3> <h3>Passthrough Mapping</h3>",
		"url": "/v1/styles/{name}/mappings",
		"http": "POST",
		"title": "Add a new Visual Mapping",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": ["application/json"],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "javax.ws.rs.core.Response" }, "comment": null},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 412, "comment": "Invalid JSON input."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "22875663",
		"inputs": {
                "PATH": [{"name": "name", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Name of the Visual Style", "jaxrs": "PATH"}],
                "QUERY": [],
                "BODY": [{"typeValue": { "type": "simple", "typeValue": "java.io.InputStream" }, "comment": null, "jaxrs": "BODY"}],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/nodes/{nodeId}/adjEdges",
		"http": "GET",
		"title": "Get adjacent edges for a node",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "collection", "typeValue":{ "type": "simple", "typeValue": "number" } }, "comment": "List of connected edges (as SUID)"},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "1532171535",
		"inputs": {
                "PATH": [
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"},
                    {"name": "nodeId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Target node SUID", "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/groups/{groupNodeId}",
		"http": "DELETE",
		"title": "Delete a group",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": [],
		"roles": [],
		"output": {},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "1469098445",
		"inputs": {
                "PATH": [
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"},
                    {"name": "groupNodeId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Group node SUID", "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "By passing a list of key-value pair for each Visual Property, update single node/edge view. The body should have the following JSON: <pre>\n [\n 		{\n 			\"visualProperty\": \"Visual Property Name, like NODE_FILL_COLOR\",\n 			\"value\": \"Serialized form of value, like 'red.'\"\n 		},\n 		...\n 		{}\n ]\n </pre> Note that this API directly set the value to the view objects, and once Visual Style applied, those values are overridden by the Visual Style.",
		"url": "/v1/networks/{networkId}/views/{viewId}/{objectType}/{objectId}",
		"http": "PUT",
		"title": "Update single node/edge view object",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": ["application/json"],
		"produces": [],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "javax.ws.rs.core.Response" }, "comment": null},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 412, "comment": "Invalid JSON input."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-426583312",
		"inputs": {
                "PATH": [
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"},
                    {"name": "viewId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network view SUID", "jaxrs": "PATH"},
                    {"name": "objectType", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Type of objects (nodes, edges, or network)", "jaxrs": "PATH"},
                    {"name": "objectId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "node/edge SUID (NOT node/edge view SUID)", "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [{"typeValue": { "type": "simple", "typeValue": "java.io.InputStream" }, "comment": null, "jaxrs": "BODY"}],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/nodes/{nodeId}/pointer",
		"http": "GET",
		"title": "Get network pointer (nested network SUID)",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Nested network SUID"},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-936620209",
		"inputs": {
                "PATH": [
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID.", "jaxrs": "PATH"},
                    {"name": "nodeId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "target node SUID.", "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "Generate a PNG image as stream. Default size is 600 px.",
		"url": "/v1/networks/{networkId}/views/first.png",
		"http": "GET",
		"title": "Get PNG image of a network view",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["image/png"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "javax.ws.rs.core.Response" }, "comment": "PNG image stream."},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "144494073",
		"inputs": {
                "PATH": [{"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"}],
                "QUERY": [{"name": "h", "defaultValue": "600", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Optional height of the image. Width will be set automatically.", "jaxrs": "QUERY"}],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/tables/{tableType}.csv",
		"http": "GET",
		"title": "Get a table as CSV",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["text/plain"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Table in CSV format"},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-641856805",
		"inputs": {
                "PATH": [
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"},
                    {"name": "tableType", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Table type (defaultnode, defaultedge or defaultnetwork)", "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/apply/layouts/{algorithmName}/{networkId}",
		"http": "GET",
		"title": "Apply layout to a network",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "javax.ws.rs.core.Response" }, "comment": "Success message"},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "1226484092",
		"inputs": {
                "PATH": [
                    {"name": "algorithmName", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Name of layout algorithm (\"circular\", \"force-directed\", etc.)", "jaxrs": "PATH"},
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Target network SUID", "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/styles/{name}",
		"http": "PUT",
		"title": "Update name of a Visual Style",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": ["application/json"],
		"produces": ["application/json"],
		"roles": [],
		"output": {},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 412, "comment": "Invalid JSON input."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-1238918577",
		"inputs": {
                "PATH": [{"name": "name", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Original name of the Visual Style", "jaxrs": "PATH"}],
                "QUERY": [],
                "BODY": [{"typeValue": { "type": "simple", "typeValue": "java.io.InputStream" }, "comment": null, "jaxrs": "BODY"}],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/styles/{name}/defaults",
		"http": "GET",
		"title": "Get all default values for the Visual Style",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "List of all default values"},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-541289516",
		"inputs": {
                "PATH": [{"name": "name", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Name of the Visual Style", "jaxrs": "PATH"}],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/groups/",
		"http": "GET",
		"title": "Get all groups in the network",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "List of all groups in the network"},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-484652426",
		"inputs": {
                "PATH": [{"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"}],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/views/{viewId}/{objectType}/{objectId}",
		"http": "GET",
		"title": "Get view object for the specified type (node or edge)",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": null},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-751191979",
		"inputs": {
                "PATH": [
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"},
                    {"name": "viewId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network view SUID", "jaxrs": "PATH"},
                    {"name": "objectType", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "nodes or edges", "jaxrs": "PATH"},
                    {"name": "objectId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Object's SUID", "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/styles/{name}/mappings",
		"http": "GET",
		"title": "Get all Visual Mappings for the Visual Style",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "List of all Visual Mappings."},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "1435114727",
		"inputs": {
                "PATH": [{"name": "name", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Name of the Visual Style", "jaxrs": "PATH"}],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "This returns JSON version of Visual Style object with full details. Format is simple: <pre>\n {\n 	\"title\": (name of this Visual Style),\n 	\"defaults\": [ default values ],\n 	\"mappings\": [ Mappings ]\n }\n </pre> Essentially, this is a JSON version of the Visual Style XML file.",
		"url": "/v1/styles/{name}",
		"http": "GET",
		"title": "Get a Visual Style with full details",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Visual Style in Cytoscape JSON format"},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-727286072",
		"inputs": {
                "PATH": [{"name": "name", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Name of the Visual Style", "jaxrs": "PATH"}],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/",
		"http": "POST",
		"title": "Create a new network from Cytoscape.js JSON or Edgelist",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": ["application/json"],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "SUID of the new network"},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 412, "comment": "Invalid JSON input."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-745567264",
		"inputs": {
                "PATH": [],
                "QUERY": [
                    {"name": "collection", "defaultValue": "Posted: ", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Name of new network collection", "jaxrs": "QUERY"},
                    {"name": "source", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Optional. \"url\"", "jaxrs": "QUERY"},
                    {"name": "format", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "\"edgelist\" or \"json\"", "jaxrs": "QUERY"},
                    {"name": "title", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Title of the new network", "jaxrs": "QUERY"}
                ],
                "BODY": [{"typeValue": { "type": "simple", "typeValue": "java.io.InputStream" }, "comment": null, "jaxrs": "BODY"}],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/session/name",
		"http": "GET",
		"title": "Get current session name",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Current session name"},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-1394644823",
		"inputs": {
                "PATH": [],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/styles/",
		"http": "GET",
		"title": "Get list of Visual Style titles",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "List of Visual Style titles."},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "646055412",
		"inputs": {
                "PATH": [],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "By passing list of key-value pair for each Visual Property, update node view. The body should have the following JSON: <pre>\n [\n 		{\n 			\"SUID\": SUID of node,\n 			\"view\": [\n 				{\n 					\"visualProperty\": \"Visual Property Name, like NODE_FILL_COLOR\",\n 					\"value\": \"Serialized form of value, like 'red.'\"\n 				},\n 				...\n 				{}\n 			]\n 		},\n 		...\n 		{}\n ]\n </pre> Note that this API directly set the value to the view objects, and once Visual Style applied, those values are overridden by the Visual Style.",
		"url": "/v1/networks/{networkId}/views/{viewId}/{objectType}",
		"http": "PUT",
		"title": "Update node/edge view objects at once",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": ["application/json"],
		"produces": [],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "javax.ws.rs.core.Response" }, "comment": null},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 412, "comment": "Invalid JSON input."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "1315339807",
		"inputs": {
                "PATH": [
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"},
                    {"name": "viewId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network view SUID", "jaxrs": "PATH"},
                    {"name": "objectType", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Type of objects (\"nodes\" or \"edges\")", "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [{"typeValue": { "type": "simple", "typeValue": "java.io.InputStream" }, "comment": null, "jaxrs": "BODY"}],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/styles/{name}",
		"http": "DELETE",
		"title": "Delete a Visual Style",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-1398070574",
		"inputs": {
                "PATH": [{"name": "name", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": null, "jaxrs": "PATH"}],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "Add new edge(s) to the network. Body should include an array of new node names. <pre>\n [\n 	{\n 		\"source\": SOURCE_NODE_SUID,\n 		\"target\": TARGET_NODE_SUID,\n 		\"directed\": (Optional boolean value.  Default is True),\n 		\"interaction\": (Optional.  Will be used for Interaction column.  Default value is '-')\n 	} ...\n ]\n </pre>",
		"url": "/v1/networks/{networkId}/edges",
		"http": "POST",
		"title": "Add edge(s) to existing network",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": ["application/json"],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "SUIDs of the new edges with source and target SUIDs."},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 412, "comment": "Invalid JSON input."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-868911793",
		"inputs": {
                "PATH": [{"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"}],
                "QUERY": [],
                "BODY": [{"typeValue": { "type": "simple", "typeValue": "java.io.InputStream" }, "comment": null, "jaxrs": "BODY"}],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/styles/visualproperties/{visualProperty}",
		"http": "GET",
		"title": "Get a Visual Property",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Visual Property as object"},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-186276961",
		"inputs": {
                "PATH": [{"name": "visualProperty", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Target Visual Property ID", "jaxrs": "PATH"}],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}",
		"http": "GET",
		"title": "Get a network in Cytoscape.js format",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json;charset=utf-8"],
		"roles": [],
		"output": {"typeValue": com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_CyJsNetwork_out"], "comment": "Network with all associated tables in Cytoscape.js format."},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "839244670",
		"inputs": {
                "PATH": [{"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"}],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/styles/{name}/mappings/{vpName}",
		"http": "DELETE",
		"title": "Delete a Visual Mapping from a Visual Style",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-1305510572",
		"inputs": {
                "PATH": [
                    {"name": "name", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Name of the Visual Style", "jaxrs": "PATH"},
                    {"name": "vpName", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Visual Property name associated with the mapping", "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/",
		"http": "GET",
		"title": "Cytoscape RESTful API server status",
		"tags": ["Server status"],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json;charset=utf-8"],
		"roles": [],
		"output": {"typeValue": com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_ServerStatus_out"], "comment": "Summary of server status"},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "If REST API Module is not working."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "1637304040",
		"inputs": {
                "PATH": [],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/nodes",
		"http": "GET",
		"title": "Get matching nodes",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "collection", "typeValue":{ "type": "simple", "typeValue": "number" } }, "comment": "List of matched node SUIDs. If no parameter is given, returns all node SUIDs."},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-351293045",
		"inputs": {
                "PATH": [{"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"}],
                "QUERY": [
                    {"name": "column", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Optional. Node table column name to be used for search.", "jaxrs": "QUERY"},
                    {"name": "query", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Optional. Search query.", "jaxrs": "QUERY"}
                ],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "This method is only for Visual Properties with DiscreteRange, such as NODE_SHAPE or EDGE_LINE_TYPE.",
		"url": "/v1/styles/visualproperties/{vp}/values",
		"http": "GET",
		"title": "Get all available range values for the Visual Property",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "List of all available values for the visual property."},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-1771341593",
		"inputs": {
                "PATH": [{"name": "vp", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Visual Property ID", "jaxrs": "PATH"}],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "Apply edge bundling with default parameters. Currently optional parameters are not supported.",
		"url": "/v1/apply/edgebundling/{networkId}",
		"http": "GET",
		"title": "Apply Edge Bundling to a network",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "javax.ws.rs.core.Response" }, "comment": "Success message"},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-623876800",
		"inputs": {
                "PATH": [{"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Target network SUID", "jaxrs": "PATH"}],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "Returns full list of network data as a JSON array. JSON is in <a href=\"http://cytoscape.github.io/cytoscape.js/\">Cytoscape.js</a> format. If no query parameter is given, returns all networks in current session.",
		"url": "/v1/networks.names/",
		"http": "GET",
		"title": "Get networks in Cytoscape.js JSON format",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json; charset=UTF-8"],
		"roles": [],
		"output": {"typeValue": { "type": "collection", "typeValue":com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_CyJsNetwork_out"] }, "comment": "Matched networks in Cytoscape.js JSON. If no query is given, all networks."},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-2049587644",
		"inputs": {
                "PATH": [],
                "QUERY": [
                    {"name": "column", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Optional. Network table column name to be used for search.", "jaxrs": "QUERY"},
                    {"name": "query", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Optional. Search query.", "jaxrs": "QUERY"}
                ],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/views/{viewId}/network/{visualProperty}",
		"http": "GET",
		"title": null,
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": null},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-966304515",
		"inputs": {
                "PATH": [
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": null, "jaxrs": "PATH"},
                    {"name": "viewId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": null, "jaxrs": "PATH"},
                    {"name": "visualProperty", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": null, "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/groups/{groupNodeId}/expand",
		"http": "GET",
		"title": "Expand group nodes",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": [],
		"roles": [],
		"output": {},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "824273598",
		"inputs": {
                "PATH": [
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"},
                    {"name": "groupNodeId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Group node SUID", "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/styles/{name}.json",
		"http": "GET",
		"title": "Get a Visual Style in Cytoscape.js CSS format.",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Visual Style in Cytoscape.js CSS format. This is always in an array."},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-1467604967",
		"inputs": {
                "PATH": [{"name": "name", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Name of the Visual Style", "jaxrs": "PATH"}],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/groups/count",
		"http": "GET",
		"title": "Get number of groups in the network",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Number of groups in the network"},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "1385114415",
		"inputs": {
                "PATH": [{"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"}],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "Currently, this is same as POST; it simply replaces existing mapping. You need to send complete information for the new mappings.",
		"url": "/v1/styles/{name}/mappings/{vp}",
		"http": "PUT",
		"title": "Update an existing Visual Mapping",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": ["application/json"],
		"produces": [],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "javax.ws.rs.core.Response" }, "comment": null},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 412, "comment": "Invalid JSON input."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-239384552",
		"inputs": {
                "PATH": [
                    {"name": "name", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Name of visual Style", "jaxrs": "PATH"},
                    {"name": "vp", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Target Visual Property", "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [{"typeValue": { "type": "simple", "typeValue": "java.io.InputStream" }, "comment": null, "jaxrs": "BODY"}],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/views/first",
		"http": "DELETE",
		"title": "Delete a view whatever found first.",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "1956573753",
		"inputs": {
                "PATH": [{"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"}],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/edges/count",
		"http": "GET",
		"title": "Get number of edges in the network",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "number of edges in the network"},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-1189989470",
		"inputs": {
                "PATH": [{"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"}],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/styles/",
		"http": "POST",
		"title": "Create a new Visual Style from JSON.",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": ["application/json"],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Title of the new Visual Style."},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 412, "comment": "Invalid JSON input."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-844810990",
		"inputs": {
                "PATH": [],
                "QUERY": [],
                "BODY": [{"typeValue": { "type": "simple", "typeValue": "java.io.InputStream" }, "comment": null, "jaxrs": "BODY"}],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/edges",
		"http": "DELETE",
		"title": "Delete all edges in the network",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": [],
		"roles": [],
		"output": {},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-751167354",
		"inputs": {
                "PATH": [{"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"}],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/styles/{name}/mappings/{vp}",
		"http": "GET",
		"title": "Get a Visual Mapping associated with the Visual Property",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Visual Mapping assigned to the Visual Property"},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-1738123557",
		"inputs": {
                "PATH": [
                    {"name": "name", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Name of the Visual Style", "jaxrs": "PATH"},
                    {"name": "vp", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Unique ID of the Visual Property. This should be the unique ID of the VP.", "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/groups/",
		"http": "DELETE",
		"title": "Delete all groups in the network",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": [],
		"roles": [],
		"output": {},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "1244466579",
		"inputs": {
                "PATH": [{"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"}],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/version",
		"http": "GET",
		"title": "Get Cytoscape and REST API version",
		"tags": ["Server status"],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_CytoscapeVersion_out"], "comment": "Cytoscape version and REST API version"},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "1344679833",
		"inputs": {
                "PATH": [],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/ui/show-details",
		"http": "PUT",
		"title": null,
		"tags": ["Server status"],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_CytoscapeVersion_out"], "comment": null},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 412, "comment": "Invalid JSON input."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-1753657146",
		"inputs": {
                "PATH": [],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/views/",
		"http": "GET",
		"title": "Get SUID of all network views",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "collection", "typeValue":{ "type": "simple", "typeValue": "number" } }, "comment": "Array of all network view SUIDs"},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-1320550666",
		"inputs": {
                "PATH": [{"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"}],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/styles/",
		"http": "DELETE",
		"title": "Delete all Visual Styles except default style",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-1940190049",
		"inputs": {
                "PATH": [],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/tables/{tableType}/rows/{primaryKey}",
		"http": "GET",
		"title": "Get a row in a table",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Row in the table"},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-1678146497",
		"inputs": {
                "PATH": [
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"},
                    {"name": "tableType", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Table type (defaultnode, defaultedge or defaultnetwork)", "jaxrs": "PATH"},
                    {"name": "primaryKey", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Name of primary key column", "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/views/{viewId}/{objectType}/{objectId}/{visualProperty}",
		"http": "GET",
		"title": null,
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": null},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-1818955693",
		"inputs": {
                "PATH": [
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": null, "jaxrs": "PATH"},
                    {"name": "viewId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": null, "jaxrs": "PATH"},
                    {"name": "objectType", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": null, "jaxrs": "PATH"},
                    {"name": "objectId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": null, "jaxrs": "PATH"},
                    {"name": "visualProperty", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": null, "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/tables/{tableType}/columns/{columnName}",
		"http": "PUT",
		"title": "Update values in a column By default, you need to provide key-value pair to set values. However, if \"default\" is provided, it will be used for the entire column. This is useful to set columns like \"selected.\"",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": ["application/json"],
		"produces": [],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "javax.ws.rs.core.Response" }, "comment": null},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 412, "comment": "Invalid JSON input."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-146811400",
		"inputs": {
                "PATH": [
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"},
                    {"name": "tableType", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Table type: \"defaultnode\", \"defaultedge\" or \"defaultnetwork\"", "jaxrs": "PATH"},
                    {"name": "columnName", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Target column name", "jaxrs": "PATH"}
                ],
                "QUERY": [{"name": "default", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": null, "jaxrs": "QUERY"}],
                "BODY": [{"typeValue": { "type": "simple", "typeValue": "java.io.InputStream" }, "comment": null, "jaxrs": "BODY"}],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "Returns full list of network data as a JSON array. JSON is in <a href=\"http://cytoscape.github.io/cytoscape.js/\">Cytoscape.js</a> format. If no query parameter is given, returns all networks in current session.",
		"url": "/v1/networks.json/",
		"http": "GET",
		"title": "Get networks in Cytoscape.js JSON format",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json; charset=UTF-8"],
		"roles": [],
		"output": {"typeValue": { "type": "collection", "typeValue":com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_CyJsNetwork_out"] }, "comment": "Matched networks in Cytoscape.js JSON. If no query is given, all networks."},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-116750400",
		"inputs": {
                "PATH": [],
                "QUERY": [
                    {"name": "column", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Optional. Network table column name to be used for search.", "jaxrs": "QUERY"},
                    {"name": "query", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Optional. Search query.", "jaxrs": "QUERY"}
                ],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/views/",
		"http": "POST",
		"title": "Create view for the network",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "SUID for the new Network View."},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 412, "comment": "Invalid JSON input."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-674835444",
		"inputs": {
                "PATH": [{"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"}],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/session/",
		"http": "POST",
		"title": "Create a session file",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Session file name"},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 412, "comment": "Invalid JSON input."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-1722986339",
		"inputs": {
                "PATH": [],
                "QUERY": [{"name": "file", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Session file location (should be absolute path)", "jaxrs": "QUERY"}],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "This get method load a new session from a file",
		"url": "/v1/session/",
		"http": "GET",
		"title": "Load new session from a local file",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Session file name as string"},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "874002889",
		"inputs": {
                "PATH": [],
                "QUERY": [{"name": "file", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "File name (should be absolute path)", "jaxrs": "QUERY"}],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/edges/{edgeId}/isDirected",
		"http": "GET",
		"title": "Get edge directionality",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "boolean" }, "comment": "true if the edge is directed."},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "748072261",
		"inputs": {
                "PATH": [
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"},
                    {"name": "edgeId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Target edge SUID", "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/tables/{tableType}/rows",
		"http": "GET",
		"title": "Get all rows in a table",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "All rows in the table"},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-805850066",
		"inputs": {
                "PATH": [
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"},
                    {"name": "tableType", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Table type (defaultnode, defaultedge or defaultnetwork)", "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "Check status of Visual Property Dependencies. If a dependency is enables, it has true for \"enabled.\"",
		"url": "/v1/styles/{name}/dependencies",
		"http": "GET",
		"title": "Get all Visual Property Dependency status",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "List of the status of all Visual Property dependencies."},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "180906514",
		"inputs": {
                "PATH": [{"name": "name", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Name of the Visual Style", "jaxrs": "PATH"}],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "Create a new group from a list of nodes. The Body should be in the following format: <pre>\n 	{\n 		\"name\": (New group node name),\n 		\"nodes\": [\n 			nodeSUID1, nodeSUID2, ...\n 		]\n 	}\n </pre>",
		"url": "/v1/networks/{networkId}/groups/",
		"http": "POST",
		"title": "Create a new group",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": ["application/json"],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "New group node's SUID"},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 412, "comment": "Invalid JSON input."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-1579310846",
		"inputs": {
                "PATH": [{"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"}],
                "QUERY": [],
                "BODY": [{"typeValue": { "type": "simple", "typeValue": "java.io.InputStream" }, "comment": null, "jaxrs": "BODY"}],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/nodes",
		"http": "DELETE",
		"title": "Delete all nodes in the network",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": [],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "javax.ws.rs.core.Response" }, "comment": null},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-1904302687",
		"inputs": {
                "PATH": [{"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID.", "jaxrs": "PATH"}],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "Add new node(s) to the network. Body should include an array of new node names. <br/> <pre>\n [ \"nodeName1\", \"nodeName2\", ... ]\n </pre> <br /> Node name will be used for \"name\" column.",
		"url": "/v1/networks/{networkId}/nodes",
		"http": "POST",
		"title": "Add node(s) to existing network",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": ["application/json"],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "SUID of the new node(s) with the name."},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 412, "comment": "Invalid JSON input."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "1195970986",
		"inputs": {
                "PATH": [{"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"}],
                "QUERY": [],
                "BODY": [{"typeValue": { "type": "simple", "typeValue": "java.io.InputStream" }, "comment": null, "jaxrs": "BODY"}],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "Cytoscape can have multiple views per network model. This feature is not exposed to end-users, but you can access it from this API.",
		"url": "/v1/networks/{networkId}/views/count",
		"http": "GET",
		"title": "Get number of views for the given network model",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Number of views for the network model"},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-262013305",
		"inputs": {
                "PATH": [{"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"}],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "Generate a PNG network image as stream. Default size is 600 px.",
		"url": "/v1/networks/{networkId}/views/{viewId}.png",
		"http": "GET",
		"title": "Get PNG image of a network view",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["image/png"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "javax.ws.rs.core.Response" }, "comment": "PNG image stream."},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "1288037935",
		"inputs": {
                "PATH": [
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"},
                    {"name": "viewId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network View SUID", "jaxrs": "PATH"}
                ],
                "QUERY": [{"name": "h", "defaultValue": "600", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Optional height of the image. Width will be set automatically.", "jaxrs": "QUERY"}],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/edges/{edgeId}",
		"http": "GET",
		"title": "Get an edge",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": com.qmino.miredot.restApiSource.tos["org_cytoscape_rest_internal_model_Edge_out"], "comment": "Edge with associated row data"},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "288600029",
		"inputs": {
                "PATH": [
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"},
                    {"name": "edgeId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Edge SUID", "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/session/",
		"http": "DELETE",
		"title": "Delete current session and start new one",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Success message"},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-1845618931",
		"inputs": {
                "PATH": [],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/nodes/{nodeId}/neighbors",
		"http": "GET",
		"title": "Get first neighbors of the node",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "collection", "typeValue":{ "type": "simple", "typeValue": "number" } }, "comment": "Neighbors of the node as a list of SUIDs."},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "1214382742",
		"inputs": {
                "PATH": [
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Target network SUID.", "jaxrs": "PATH"},
                    {"name": "nodeId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Node SUID.", "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "This API is for updating default node/edge/network data table. New columns will be created if they does not exist in the target table. The BODY of the data should be in the following format:<br/> <pre>\n 	{\n 		\"key\":\"SUID\",  		// This is the unique key column in the existing table\n 		\"dataKey\": \"id\",		// Mapping key for the new values\n 		\"data\": [\n 			{\n 				\"id\": 12345,		// Required. Field name should be same as \"dataKey.\"\n 								// In this case, it is \"id,\" but can be anything.\n 				\"gene_name\": \"brca1\",\n 				\"exp1\": 0.11,\n 				\"exp2\": 0.2\n  			}, ...\n 			\n 		]\n 	}\n </pre> Current limitations: <ul> 	<li>	If key is not specified, SUID will be used for mapping</li> 	<li>Numbers are handled as Double</li> 	<li>List column is not supported in this version</li> </ul>",
		"url": "/v1/networks/{networkId}/tables/{tableType}",
		"http": "PUT",
		"title": "Update default table with new values.",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": ["application/json"],
		"produces": [],
		"roles": [],
		"output": {},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 412, "comment": "Invalid JSON input."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "438214378",
		"inputs": {
                "PATH": [
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"},
                    {"name": "tableType", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Table type (defaultnode, defaultedge or defaultnetwork)", "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [{"typeValue": { "type": "simple", "typeValue": "java.io.InputStream" }, "comment": null, "jaxrs": "BODY"}],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/nodes/count",
		"http": "GET",
		"title": "Get number of nodes in the network",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Number of nodes in the network with given SUID"},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-154879171",
		"inputs": {
                "PATH": [{"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": null, "jaxrs": "PATH"}],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/tables/{tableType}",
		"http": "GET",
		"title": "Get a default table",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "The Table in JSON"},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-1923426397",
		"inputs": {
                "PATH": [
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"},
                    {"name": "tableType", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Table type (defaultnode, defaultedge or defaultnetwork)", "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "In general, a network has one view. But if there are multiple views, this deletes all of them.",
		"url": "/v1/networks/{networkId}/views/",
		"http": "DELETE",
		"title": "Delete all network views",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "1980812267",
		"inputs": {
                "PATH": [{"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"}],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/tables/{tableType}.tsv",
		"http": "GET",
		"title": "Get a table as TSV (tab delimited text)",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["text/plain"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Table in TSV format"},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "890341100",
		"inputs": {
                "PATH": [
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"},
                    {"name": "tableType", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Table type (defaultnode, defaultedge or defaultnetwork)", "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	},
	{
		"beschrijving": "",
		"url": "/v1/networks/{networkId}/tables/{tableType}/columns",
		"http": "GET",
		"title": "Get all columns in a table",
		"tags": [],
		"authors": [],
		"compressed": false,
		"deprecated": false,
		"consumes": [],
		"produces": ["application/json"],
		"roles": [],
		"output": {"typeValue": { "type": "simple", "typeValue": "string" }, "comment": "All columns in the specified table."},
		"statusCodes": [
                { "httpCode": 200, "comment": "The service call has completed successfully."},
                { "httpCode": 404, "comment": "The URL (or object) does not exist."},
                { "httpCode": 500, "comment": "The API call has not succeeded."}
            ],
		"hash": "-2070327705",
		"inputs": {
                "PATH": [
                    {"name": "networkId", "typeValue": { "type": "simple", "typeValue": "number" }, "comment": "Network SUID", "jaxrs": "PATH"},
                    {"name": "tableType", "typeValue": { "type": "simple", "typeValue": "string" }, "comment": "Table type (defaultnode, defaultedge or defaultnetwork)", "jaxrs": "PATH"}
                ],
                "QUERY": [],
                "BODY": [],
                "HEADER": [],
                "COOKIE": [],
                "FORM": [],
                "MATRIX": []
            }
	}];
com.qmino.miredot.projectWarnings = [
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing return type documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "PARTIAL_RESOURCE_OVERLAP",
		"description": "This rest interface (partially) hides another rest interface",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "PARTIAL_RESOURCE_OVERLAP",
		"description": "This rest interface (partially) hides another rest interface",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing return type documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAXRS_MISSING_PRODUCES",
		"description": "Interface returns a result, but does not specify a Produces value.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "PARTIAL_RESOURCE_OVERLAP",
		"description": "This rest interface (partially) hides another rest interface",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing return type documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAXRS_MISSING_PRODUCES",
		"description": "Interface returns a result, but does not specify a Produces value.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "PARTIAL_RESOURCE_OVERLAP",
		"description": "This rest interface (partially) hides another rest interface",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing return type documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAXRS_MISSING_PRODUCES",
		"description": "Interface returns a result, but does not specify a Produces value.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing return type documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAXRS_MISSING_CONSUMES",
		"description": "Interface specifies a JAXRS-BODY parameter, but does not specify a Consumes value.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing return type documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAXRS_MISSING_PRODUCES",
		"description": "Interface returns a result, but does not specify a Produces value.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing return type documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAXRS_MISSING_PRODUCES",
		"description": "Interface returns a result, but does not specify a Produces value.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing return type documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing return type documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing return type documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAXRS_MISSING_PRODUCES",
		"description": "Interface returns a result, but does not specify a Produces value.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing return type documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing return type documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAXRS_MISSING_PRODUCES",
		"description": "Interface returns a result, but does not specify a Produces value.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_SUMMARY",
		"description": "Missing summary tag",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing return type documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "PARTIAL_RESOURCE_OVERLAP",
		"description": "This rest interface (partially) hides another rest interface",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "PARTIAL_RESOURCE_OVERLAP",
		"description": "This rest interface (partially) hides another rest interface",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing return type documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAXRS_MISSING_PRODUCES",
		"description": "Interface returns a result, but does not specify a Produces value.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "PARTIAL_RESOURCE_OVERLAP",
		"description": "This rest interface (partially) hides another rest interface",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_SUMMARY",
		"description": "Missing summary tag",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing return type documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_SUMMARY",
		"description": "Missing summary tag",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing return type documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing return type documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAXRS_MISSING_PRODUCES",
		"description": "Interface returns a result, but does not specify a Produces value.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "PARTIAL_RESOURCE_OVERLAP",
		"description": "This rest interface (partially) hides another rest interface",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing return type documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAXRS_MISSING_PRODUCES",
		"description": "Interface returns a result, but does not specify a Produces value.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "PARTIAL_RESOURCE_OVERLAP",
		"description": "This rest interface (partially) hides another rest interface",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_PARAMETER_DOCUMENTATION",
		"description": "Missing parameter documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "PARTIAL_RESOURCE_OVERLAP",
		"description": "This rest interface (partially) hides another rest interface",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_INTERFACEDOCUMENTATION",
		"description": "Missing interface documentation",
		"failedBuild": false,
		"interface": null,
		"entity": null
	},
	{
		"category": "JAVADOC_MISSING_AUTHORS",
		"description": "No author(s) specified for interface.",
		"failedBuild": false,
		"interface": null,
		"entity": null
	}];
com.qmino.miredot.processErrors  = [
];

