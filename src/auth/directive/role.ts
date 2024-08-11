import { Directive } from '@nestjs/graphql';
import { SchemaDirectiveVisitor } from '@graphql-tools/utils';
import { defaultFieldResolver, GraphQLField } from 'graphql';

@Directive('@Role(role: String!)')
export class RoleDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: GraphQLField<any, any>) {
    const { resolve = defaultFieldResolver } = field;
    const { role } = this.args;

    field.resolve = async function (...args) {
      const [, , context] = args;
      if (!context.user || context.user.role !== role) {
        throw new Error(`You are not authorized to access this field`);
      }
      return resolve.apply(this, args);
    };
  }
}
