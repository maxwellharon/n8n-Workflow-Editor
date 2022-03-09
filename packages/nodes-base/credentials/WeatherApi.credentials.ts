import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';


export class WeatherApi implements ICredentialType {
	name = 'weatherApi';
	displayName = 'Weather API';
	properties: INodeProperties[] = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			default: '',
		},
	];
}
