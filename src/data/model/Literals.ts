import { Hash, Hashing } from './Hashing';

type Literal           = { hash: Hash, value: any, author?: Hash, signature?: string, dependencies: Array<Dependency> }
type Dependency        = { path: string, hash: Hash, className: string, type: ('literal'|'reference') };

class LiteralUtils {

    static getType(literal: Literal): string {
        return literal.value['_type'];
    }

    static getClassName(literal: Literal): string {
        return literal.value['_class'];
    }

    static getFields(literal: Literal): any {
        return literal.value['_fields'];
    }

    static getFlags(literal: Literal): string[] {
        return literal.value['_flags'];
    }

    static validateHash(literal: Literal): boolean {
        return literal.hash === Hashing.forValue(literal.value);
    }

}

export { Literal, Dependency, LiteralUtils }