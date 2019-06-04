/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* global getAssetRegistry getFactory emit */

/**
 * Sample transaction processor function.
 * @param {org.example.basic.trial} tx The sample transaction instance.
 * @transaction
 */
async function sampleTransaction(tx) {  // eslint-disable-line no-unused-vars
	const filereg = await getAssetRegistry('org.example.basic.files');
  	const shireg = await getAssetRegistry('org.example.basic.someshit');
  	const ownerreg = await getParticipantRegistry('org.example.basic.owner');
  	const factory = getFactory();
  	const asset = factory.newResource('org.example.basic', 'files', '65');
  	const owner = factory.newResource('org.example.basic', 'owner', 'qwerty1');
  	asset.start = 'qwerty';
  	asset.destination =  'qwerty';
    asset.index  = 0;
  	var ass = factory.newResource('org.example.basic', 'someshit', '265');
  	//ass = factory.newRelationship('org.example.basic', 'someshit', '1');
  	ass.la=tx.shit.la;
    var arr = await new Array();
  	arr.push(ass);
  	asset.shit = await arr;
  	await filereg.add(asset);
  	await shireg.add(ass);
  	await ownerreg.add(owner);
}
/**
 * Sample transaction processor function.
 * @param {org.example.basic.second} rtx The sample transaction instance.
 * @transaction
 */
async function secondtx (rtx){
	const filereg = await getAssetRegistry('org.example.basic.random');
  	const shireg = await getAssetRegistry('org.example.basic.two');
  	const factory = getFactory();
  	const asset = factory.newResource('org.example.basic', 'random', '565');
  	var ass = factory.newResource('org.example.basic', 'two', '2165');
  	asset.second = 'qwefg';
  	await filereg.add(asset);
  	var rel = factory.newRelationship('org.example.basic', 'random', '565');
  	ass.rdm = rel;
  	await shireg.add(ass);
  	
}
