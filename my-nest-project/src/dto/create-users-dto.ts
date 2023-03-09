import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty()
    readonly id: number;
    @ApiProperty()
    readonly name: string;
    @ApiProperty()
    readonly lastName: string;
    @ApiProperty()
    readonly email: string;
    @ApiProperty()
    readonly username: string;
    @ApiProperty()
    readonly avatar: string;
    @ApiProperty()
    readonly password: string;
    @ApiProperty()
    readonly timestamp: string;
}