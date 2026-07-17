import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";


export class JwrStrategy extends PassportStrategy
(Strategy){
    constructor(configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.get<string>('JWT_SECRET')
        });
    }

    async validate(payload: any) {
        return { userId: payload.sub, email: payload.email }
    }
}