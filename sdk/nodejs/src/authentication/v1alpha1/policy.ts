// *** WARNING: this file was generated by the Pulumi Kubernetes Istio codegen tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import { CustomResourceOptions } from '@pulumi/pulumi';
import * as k8s from '@pulumi/kubernetes';

import { input } from '../../types';

export class Policy extends k8s.apiextensions.CustomResource {
  constructor(name: string, args: input.authentication.v1alpha1.PolicyArgs, opts?: CustomResourceOptions) {
    const inputs: k8s.apiextensions.CustomResourceArgs = {
      apiVersion: 'authentication.istio.io/v1alpha1',
      kind: 'Policy',
      metadata: {
        name,
      },
      ...args,
    };

    super(name, inputs, opts);
  }
}
