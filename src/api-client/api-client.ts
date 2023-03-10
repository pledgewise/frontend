//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.18.2.0 (NJsonSchema v10.8.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

import { ApiClientBase, IApiClientConfig } from "./api-client-base";
import dayjs2 from "dayjs";
import * as dayjs from 'dayjs';

export class EntityClient extends ApiClientBase {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(configuration: IApiClientConfig, baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super(configuration);
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    /**
     * @param count (optional) 
     * @param page (optional) 
     * @param sort (optional) 
     * @param filter (optional) 
     * @return Success
     */
    get(count: number | undefined, page: number | undefined, sort: EntityPropertyNameEnumSortWebDTO[] | undefined, filter: EntityPropertyNameEnumFilterWebDTO[] | undefined): Promise<GetEntitiesWebResponseDTO> {
        let url_ = this.baseUrl + "/rest/entity?";
        if (count === null)
            throw new Error("The parameter 'count' cannot be null.");
        else if (count !== undefined)
            url_ += "count=" + encodeURIComponent("" + count) + "&";
        if (page === null)
            throw new Error("The parameter 'page' cannot be null.");
        else if (page !== undefined)
            url_ += "page=" + encodeURIComponent("" + page) + "&";
        if (sort === null)
            throw new Error("The parameter 'sort' cannot be null.");
        else if (sort !== undefined)
            sort && sort.forEach((item, index) => {
                for (let attr in item)
        			if (item.hasOwnProperty(attr)) {
        				url_ += "sort[" + index + "]." + attr + "=" + encodeURIComponent("" + (item as any)[attr]) + "&";
        			}
            });
        if (filter === null)
            throw new Error("The parameter 'filter' cannot be null.");
        else if (filter !== undefined)
            filter && filter.forEach((item, index) => {
                for (let attr in item)
        			if (item.hasOwnProperty(attr)) {
        				url_ += "filter[" + index + "]." + attr + "=" + encodeURIComponent("" + (item as any)[attr]) + "&";
        			}
            });
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "text/plain"
            }
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<GetEntitiesWebResponseDTO> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as GetEntitiesWebResponseDTO;
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<GetEntitiesWebResponseDTO>(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    post(body: PostEntitiesWebRequestDTO | undefined): Promise<PostEntitiesWebResponseDTO> {
        let url_ = this.baseUrl + "/rest/entity";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            }
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processPost(_response);
        });
    }

    protected processPost(response: Response): Promise<PostEntitiesWebResponseDTO> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as PostEntitiesWebResponseDTO;
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<PostEntitiesWebResponseDTO>(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    put(body: PutEntitiesWebRequestDTO | undefined): Promise<PutEntitiesWebResponseDTO> {
        let url_ = this.baseUrl + "/rest/entity";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: RequestInit = {
            body: content_,
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            }
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processPut(_response);
        });
    }

    protected processPut(response: Response): Promise<PutEntitiesWebResponseDTO> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as PutEntitiesWebResponseDTO;
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<PutEntitiesWebResponseDTO>(null as any);
    }
}

export class PledgeClient extends ApiClientBase {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(configuration: IApiClientConfig, baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        super(configuration);
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    /**
     * @param count (optional) 
     * @param page (optional) 
     * @param sort (optional) 
     * @param filter (optional) 
     * @return Success
     */
    get(count: number | undefined, page: number | undefined, sort: PledgePropertyNameEnumSortWebDTO[] | undefined, filter: PledgePropertyNameEnumFilterWebDTO[] | undefined): Promise<GetPledgesWebResponseDTO> {
        let url_ = this.baseUrl + "/rest/pledge?";
        if (count === null)
            throw new Error("The parameter 'count' cannot be null.");
        else if (count !== undefined)
            url_ += "count=" + encodeURIComponent("" + count) + "&";
        if (page === null)
            throw new Error("The parameter 'page' cannot be null.");
        else if (page !== undefined)
            url_ += "page=" + encodeURIComponent("" + page) + "&";
        if (sort === null)
            throw new Error("The parameter 'sort' cannot be null.");
        else if (sort !== undefined)
            sort && sort.forEach((item, index) => {
                for (let attr in item)
        			if (item.hasOwnProperty(attr)) {
        				url_ += "sort[" + index + "]." + attr + "=" + encodeURIComponent("" + (item as any)[attr]) + "&";
        			}
            });
        if (filter === null)
            throw new Error("The parameter 'filter' cannot be null.");
        else if (filter !== undefined)
            filter && filter.forEach((item, index) => {
                for (let attr in item)
        			if (item.hasOwnProperty(attr)) {
        				url_ += "filter[" + index + "]." + attr + "=" + encodeURIComponent("" + (item as any)[attr]) + "&";
        			}
            });
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "text/plain"
            }
        };

        return this.transformOptions(options_).then(transformedOptions_ => {
            return this.http.fetch(url_, transformedOptions_);
        }).then((_response: Response) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<GetPledgesWebResponseDTO> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as GetPledgesWebResponseDTO;
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<GetPledgesWebResponseDTO>(null as any);
    }
}

/** 1 = Name */
export enum EntityPropertyNameEnum {
    Name = 1,
}

export interface EntityPropertyNameEnumFilterWebDTO {
    /** 

1 = Name */
    field?: EntityPropertyNameEnum;
    /** 
* **1** - Equal
* **2** - Not equal
* **3** - Less than
* **4** - Less than or equal
* **5** - Greater than
* **6** - Greater than or equal
* **7** - Starts with
* **8** - Ends with
* **9** - Contains
* **10** - Not contains

1 = Eq

2 = Neq

3 = Lt

4 = Lte

5 = Gt

6 = Gte

7 = StartsWith

8 = EndsWith

9 = Contains

10 = NotContains */
    operator?: FilterOperatorEnum;
    value?: string | undefined;
    /** 
* **1** - And
* **2** - Or

1 = And

2 = Or */
    logic?: FilterLogicEnum;
    filters?: EntityPropertyNameEnumFilterWebDTO[] | undefined;
}

export interface EntityPropertyNameEnumSortWebDTO {
    /** 

1 = Name */
    field?: EntityPropertyNameEnum;
    /** 
* **1** - Ascending
* **2** - Descending

1 = Ascending

2 = Descending */
    order?: OrderByEnum;
}

/** 1 = Organization 2 = Individual */
export enum EntityTypeEnum {
    Organization = 1,
    Individual = 2,
}

export interface EntityWebDTO {
    id?: string;
    createdByUserId?: string | undefined;
    createdOn?: dayjs.Dayjs;
    pledgesCount?: number;
    fulfilledPledgesCount?: number;
    failedPledgesCount?: number;
    pendingPledgesCount?: number;
    delayedPledgesCount?: number;
    name?: string | undefined;
    description?: string | undefined;
    /** 

1 = Organization

2 = Individual */
    type?: EntityTypeEnum;
}

export interface EntityWebDTOPaginatedDataWebDTO {
    page?: number;
    count?: number;
    items?: EntityWebDTO[] | undefined;
    totalPages?: number;
    totalCount?: number;
}

/** * **1** - And * **2** - Or 1 = And 2 = Or */
export enum FilterLogicEnum {
    And = 1,
    Or = 2,
}

/** * **1** - Equal * **2** - Not equal * **3** - Less than * **4** - Less than or equal * **5** - Greater than * **6** - Greater than or equal * **7** - Starts with * **8** - Ends with * **9** - Contains * **10** - Not contains 1 = Eq 2 = Neq 3 = Lt 4 = Lte 5 = Gt 6 = Gte 7 = StartsWith 8 = EndsWith 9 = Contains 10 = NotContains */
export enum FilterOperatorEnum {
    Eq = 1,
    Neq = 2,
    Lt = 3,
    Lte = 4,
    Gt = 5,
    Gte = 6,
    StartsWith = 7,
    EndsWith = 8,
    Contains = 9,
    NotContains = 10,
}

export interface GetEntitiesWebRequestDTO {
    count?: number;
    page?: number;
    sort?: EntityPropertyNameEnumSortWebDTO[] | undefined;
    filter?: EntityPropertyNameEnumFilterWebDTO[] | undefined;
}

export interface GetEntitiesWebResponseDTO {
    entities?: EntityWebDTOPaginatedDataWebDTO | undefined;
}

export interface GetPledgesWebRequestDTO {
    count?: number;
    page?: number;
    sort?: PledgePropertyNameEnumSortWebDTO[] | undefined;
    filter?: PledgePropertyNameEnumFilterWebDTO[] | undefined;
}

export interface GetPledgesWebResponseDTO {
    pledges?: PledgeWebDTOPaginatedDataWebDTO | undefined;
    users?: UserWebDTO[] | undefined;
    entities?: EntityWebDTO[] | undefined;
}

/** * **1** - Ascending * **2** - Descending 1 = Ascending 2 = Descending */
export enum OrderByEnum {
    Ascending = 1,
    Descending = 2,
}

/** 1 = Other 2 = Technology 3 = Business 4 = Politics 5 = PublicProjects 6 = Medical 7 = Science */
export enum PledgeCategoryEnum {
    Other = 1,
    Technology = 2,
    Business = 3,
    Politics = 4,
    PublicProjects = 5,
    Medical = 6,
    Science = 7,
}

/** 1 = Name */
export enum PledgePropertyNameEnum {
    Name = 1,
}

export interface PledgePropertyNameEnumFilterWebDTO {
    /** 

1 = Name */
    field?: PledgePropertyNameEnum;
    /** 
* **1** - Equal
* **2** - Not equal
* **3** - Less than
* **4** - Less than or equal
* **5** - Greater than
* **6** - Greater than or equal
* **7** - Starts with
* **8** - Ends with
* **9** - Contains
* **10** - Not contains

1 = Eq

2 = Neq

3 = Lt

4 = Lte

5 = Gt

6 = Gte

7 = StartsWith

8 = EndsWith

9 = Contains

10 = NotContains */
    operator?: FilterOperatorEnum;
    value?: string | undefined;
    /** 
* **1** - And
* **2** - Or

1 = And

2 = Or */
    logic?: FilterLogicEnum;
    filters?: PledgePropertyNameEnumFilterWebDTO[] | undefined;
}

export interface PledgePropertyNameEnumSortWebDTO {
    /** 

1 = Name */
    field?: PledgePropertyNameEnum;
    /** 
* **1** - Ascending
* **2** - Descending

1 = Ascending

2 = Descending */
    order?: OrderByEnum;
}

/** 1 = Pending 2 = Fulfilled 4 = Failed 8 = Postponed */
export enum PledgeStatusEnum {
    Pending = 1,
    Fulfilled = 2,
    Failed = 4,
    Postponed = 8,
}

/** 1 = Delay 2 = Fulfilled 4 = Failed */
export enum PledgeUpdateTypeEnum {
    Delay = 1,
    Fulfilled = 2,
    Failed = 4,
}

export interface PledgeUpdateWebDTO {
    pledgeId?: string | undefined;
    createdByUserId?: string | undefined;
    /** 

1 = Delay

2 = Fulfilled

4 = Failed */
    type?: PledgeUpdateTypeEnum;
}

export interface PledgeWebDTO {
    id?: string;
    createdOn?: dayjs.Dayjs;
    voteScore?: number;
    /** 

0 = NotVoted

1 = VotedUp

-1 = VotedDown */
    voted?: VoteTypeEnum;
    pledgeUpdates?: PledgeUpdateWebDTO[] | undefined;
    tags?: string[] | undefined;
    /** 

1 = Other

2 = Technology

3 = Business

4 = Politics

5 = PublicProjects

6 = Medical

7 = Science */
    category?: PledgeCategoryEnum;
    /** Short text */
    name?: string | undefined;
    /** Long text (optional) */
    description?: string | undefined;
    entityId?: string | undefined;
    createdByUserId?: string;
    /** 

1 = Pending

2 = Fulfilled

4 = Failed

8 = Postponed */
    status?: PledgeStatusEnum;
    deliverBy?: dayjs.Dayjs;
}

export interface PledgeWebDTOPaginatedDataWebDTO {
    page?: number;
    count?: number;
    items?: PledgeWebDTO[] | undefined;
    totalPages?: number;
    totalCount?: number;
}

export interface PostEntitiesWebRequestDTO {
    entities?: PostEntityWebDTO[] | undefined;
}

export interface PostEntitiesWebResponseDTO {
    ids?: string[] | undefined;
}

export interface PostEntityWebDTO {
    name?: string | undefined;
    description?: string | undefined;
    /** 

1 = Organization

2 = Individual */
    type?: EntityTypeEnum;
}

export interface PutEntitiesWebRequestDTO {
    entities?: PutEntityWebDTO[] | undefined;
}

export interface PutEntitiesWebResponseDTO {
}

export interface PutEntityWebDTO {
    id?: string;
    name?: string | undefined;
    description?: string | undefined;
    /** 

1 = Organization

2 = Individual */
    type?: EntityTypeEnum | undefined;
}

export interface UserWebDTO {
    id?: string;
    createdOn?: dayjs.Dayjs;
    firstName?: string | undefined;
    lastName?: string | undefined;
    username?: string | undefined;
}

/** 0 = NotVoted 1 = VotedUp -1 = VotedDown */
export enum VoteTypeEnum {
    NotVoted = 0,
    VotedUp = 1,
    VotedDown = -1,
}

export class ApiException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}

const possibleDates = ["createdOn"];

export class PledgeClientFinal extends PledgeClient {
  constructor(
    configuration: IApiClientConfig,
    baseUrl?: string,
    http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }
  ) {
    super(configuration, baseUrl, http);

    this.jsonParseReviver = (key: string, value: any) => {
      if (possibleDates.includes(key)) {
        const possible = dayjs2(value);
        if (possible.isValid()) {
          return possible;
        }
      }
      return value;
    };
  }
}