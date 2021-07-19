export interface TestModels {
    name?: string;
    phone?: number;
    is_active?: boolean;
}


export interface UsersModels {
    name: string;
    test: TestModels;
    tests: TestModels[];

}

//
//  let data:TestModels={};
//  let data2:UsersModels[]=[];
