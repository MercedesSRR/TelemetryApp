/*Copyright (c) 2023. Mercedes Senties, All Rights Reserved*/

export default class CloudService {

    constructor() {

    }

    connect() {
        //used to connect with remote service
    }

    save() {
        //override to support CloudService save of record/struct
    }

    load() {
        //overload to upload a single record back to the service
    }

    loadAll() {
        //overload to use the CloudService to fetch a list of things
    }
}