import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
    @ApiProperty()
    readonly id: number;
    @ApiProperty()
    readonly name: string;
    @ApiProperty()
    readonly description: string;
    @ApiProperty()
    readonly price: number;
    @ApiProperty()
    readonly picture: string;
    @ApiProperty()
    readonly stock: number;
    @ApiProperty()
    readonly code: string;
    @ApiProperty()
    readonly timestamp: string;
    @ApiProperty()
    readonly category: string;
}