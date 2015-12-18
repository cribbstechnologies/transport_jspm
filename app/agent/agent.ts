import {Component, View} from 'angular2/core';


@Component( {
	selector: 'agent'
})
@View({
	templateUrl: '../agent/index.html'
})
export class Agent {
}


export class AgentService {
	getAgents() {
		console.log("I'm no longer returning a list of dead guys");
		return ['Jimi Hendrix','James Brown'];
	}
}
