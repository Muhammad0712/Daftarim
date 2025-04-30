import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { CreateUserDto } from "../users/dto/create-user.dto";

import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { SignInDto } from "./dto/sign-in.dto";
import { User } from "../users/models/user.model";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async signUp(createUserDto: CreateUserDto) {
    const candidate = await this.usersService.findByEmail(createUserDto.email);
    if (candidate) {
      //   throw new HttpException(
      //     "Bunday email oldin ro'yxatdan o'tgan!",
      //     HttpStatus.BAD_REQUEST
      //   );
      throw new BadRequestException("Bunday email oldin ro'yxatdan o'tgan!");
    }
    const hashedPassword = await bcrypt.hash(createUserDto.password, 7);
    createUserDto.password = hashedPassword;
    const newUser = await this.usersService.create(createUserDto);

    return newUser;
  }

  private async generateToken(user: User) {
    const payload = {
      id: user.id,
      email: user.email,
      roles: user.roles,
      is_active: user.is_active,
    };
    return { token: this.jwtService.sign(payload) };
  }

  async signIn(signInDto: SignInDto) {
    const user = await this.usersService.findByEmail(signInDto.email);
    if (!user) {
      throw new UnauthorizedException("Email yoki password noto'g'ri!");
    }
    const validPassword = await bcrypt.compare(
      signInDto.password,
      user.password
    );
    if (!validPassword) {
      throw new UnauthorizedException("Email yoki password noto'g'ri!");
    }

    return this.generateToken(user)
  }
}
