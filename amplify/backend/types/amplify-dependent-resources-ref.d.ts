export type AmplifyDependentResourcesAttributes = {
  function: {
    getPosts: {
      Name: "string";
      Arn: "string";
      Region: "string";
      LambdaExecutionRole: "string";
    };
  };
  api: {
    posts: {
      RootUrl: "string";
      ApiName: "string";
      ApiId: "string";
    };
  };
};
