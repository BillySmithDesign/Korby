import { ArgsType, Field } from '@nestjs/graphql';

import { IsNotEmpty, IsString } from 'class-validator';

@ArgsType()
export class ApiKeyTokenInput {
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  apiKeyId: string;

  @Field(() => String)
  @IsNotEmpty()
  expiresAt: string;
}
