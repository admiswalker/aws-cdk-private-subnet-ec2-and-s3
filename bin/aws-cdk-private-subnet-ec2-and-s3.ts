#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsCdkPrivateSubnetEc2AndS3Stack } from '../lib/aws-cdk-private-subnet-ec2-and-s3-stack';

const app = new cdk.App();
new AwsCdkPrivateSubnetEc2AndS3Stack(app, 'AwsCdkPrivateSubnetEc2AndS3Stack');
