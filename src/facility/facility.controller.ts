import { Body,Controller,Post, Logger, Get, Put,Request } from '@nestjs/common';
import { FacilityService } from './facility.service';
import { ApiUseTags } from '@nestjs/swagger';
import { AddFacilityDto,UpdateFacilityDto, DeleteFacilityDto, SearchByDistrictDto } from './dto';

@ApiUseTags('Facility Management')
@Controller('api/v1/facility')
export class FacilityController {
    private logger = new Logger('Facility Controller');
    constructor(private readonly facilityService: FacilityService) {}

    @Get()
    gethello(): string {
        this.logger.verbose("in Facility api")
        return this.facilityService.gethello();
    }
    
    @Get("all-facility")
    getAllFacility(@Request() req: any) {
        this.logger.verbose(`retrieving all facilities`);
        return this.facilityService.getAllFacility(req);
    }

    @Get("users-facility")
    getFacility(@Request() req:any){
        this.logger.verbose('retrieving faclility of the user');
        return this.facilityService.getFacility(req.user);
    }

    @Post('add-facility')
    addfacility(@Body() addfacilityDto: AddFacilityDto) {
        this.logger.verbose("facility created");
        return this.facilityService.addfacility(addfacilityDto);
    }

    @Post('delete-Facility')
    deleteFacility(@Request() req: any,@Body() deleteFacilityDto: DeleteFacilityDto) {
        this.logger.verbose("facility removed");
        return this.facilityService.deleteFacility(req.facility,deleteFacilityDto);
    }

    @Put('update-Facility')
    updateFacility(@Request() req: any,@Body() updateFacilityDto: UpdateFacilityDto) {
        this.logger.verbose("facility updated");
        return this.facilityService.updateFacility(req.facility,updateFacilityDto);
    }
    
    @Post('search-District')
    searchDistrict(@Request() req: any,@Body() searchByDistrictDto:SearchByDistrictDto) {
        this.logger.verbose("searching by district");
        return this.facilityService.searchDistrict(req.facility,searchByDistrictDto);
    }

}
