"use client"
import Icon from '@/shared/Icon'
import RangeSlider from '@/shared/RangeSlider'
import SearchInput from '@/shared/SearchInput'
import { Button, Checkbox, Radio, RadioGroup } from '@heroui/react'
import React, { ChangeEvent } from 'react'
import { day_options } from '../mock'
import OrangeButton from '@/shared/OrangeButton'
import { useCampHook } from '../hooks'
import clsx from 'clsx'

const CampFilters = () => {
    const { filters, updateFilters, clearFilters, handleDebouncedSearch } = useCampHook();

    return (
        <div className='w-[325px] bg-white rounded-xl p-5 gap-5 flex flex-col'>

            <div className="text-xl font-semibold text-dark-1000 flex items-center gap-2">
                <span className='w-[34px] h-[34px] rounded-full bg-green-1000/30 flex items-center justify-center'><Icon name='filter' /></span>
                Filters
            </div>

            <SearchInput
                onChange={(value: string) => handleDebouncedSearch("search", value)}
                paramKey='search'
            />
            <SearchInput
                onChange={(value: string) => handleDebouncedSearch("location", value)}
                paramKey='location'
                inputClass='!min-h-11'
                label="Location"
                placeholder="City or zip code"
                icon={<Icon name='location' />}
            />

            <RangeSlider range={filters?.priceRange} onChange={(value: [number, number]) => handleDebouncedSearch("priceRange", value)} />

            <RadioGroup
                label="Camp Type"
                value={filters?.type}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleDebouncedSearch("type", e.target.value)}
                classNames={{
                    label: "!font-medium !text-[15px] !text-dark-900",
                    wrapper: '!gap-3',
                }}
            >
                {["day_camp", "night_camp", "both"].map((type) => {
                    const label = type.replace("_", " ").replace(/\b\w/g, (c) => c.toUpperCase());
                    return (
                        <Radio
                            key={type}
                            value={type}
                            className={clsx(
                                "camp-type-radio",
                                filters.type === type && "text-green-900 font-semibold"
                            )}
                        >
                            {label}
                        </Radio>
                    );
                })}
            </RadioGroup>

            <div className='camp-checkboxes'>
                <div className='!font-medium !text-[15px] !text-dark-900 mb-2'>Select flexible days?</div>
                <div className='grid grid-cols-3 gap-3'>
                    {day_options.map((option) => {
                        return (
                            <Checkbox
                                key={option.value}
                                isSelected={filters.days.includes(option.value.toString())}

                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    const checked = e.target.checked;
                                    const day = option.value;
                                    const updatedDays = checked
                                        ? Array.from(new Set([...filters.days, day]))
                                        : filters.days.filter((d) => d !== day);

                                    updateFilters({ days: updatedDays });
                                }}
                            >
                                <span className="text-gray-300 text-sm">{option.label}</span>
                            </Checkbox>
                        )
                    }
                    )}
                </div>
            </div>

            <div>
                <div className='!font-medium !text-[15px] !text-dark-900 mb-2'>Camp theme</div>
                <div className='grid grid-cols-3 gap-3'>
                    <Button onPress={() => updateFilters({ campTheme: "adventures" })} className={clsx("border border-green-900 bg-transparent text-center text-green-900 sm:text-[10px] text-[8px] font-semibold rounded-full xl:px-4 px-2 py-1.5", filters?.campTheme === "adventures" ? "bg-green-900 text-white" : "")}>Adventures</Button>
                    <Button onPress={() => updateFilters({ campTheme: "STEM" })} className={clsx("border border-green-900 bg-transparent text-center text-green-900 sm:text-[10px] text-[8px] font-semibold rounded-full xl:px-4 px-2 py-1.5", filters?.campTheme === "STEM" ? "bg-green-900 text-white" : "")}>STEM</Button>
                    <Button onPress={() => updateFilters({ campTheme: "nature" })} className={clsx("border border-green-900 bg-transparent text-center text-green-900 sm:text-[10px] text-[8px] font-semibold rounded-full xl:px-4 px-2 py-1.5", filters?.campTheme === "nature" ? "bg-green-900 text-white" : "")}>Nature</Button>
                </div>
            </div>

            <div>
                <div className='!font-medium !text-[15px] !text-dark-900 mb-2'>Transportation</div>
                <RadioGroup
                    value={filters.transportation}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        updateFilters({ transportation: e.target.value })
                    }
                >
                    <Radio value="yes">Yes</Radio>
                    <Radio value="no">No</Radio>
                </RadioGroup>
            </div>


            <div>
                <div className='!font-medium !text-[15px] !text-dark-900 mb-2'>Discount</div>
                <div className='grid grid-cols-2 gap-3'>
                    <Button onPress={() => updateFilters({ discount: "early" })} className={clsx("border border-green-900 bg-transparent text-center text-green-900 sm:text-[10px] text-[8px] font-semibold rounded-full xl:px-4 px-2 py-1.5", filters?.discount === "early" ? "bg-green-900 text-white" : "")}>Early Bird Discount</Button>
                    <Button onPress={() => updateFilters({ discount: "siblings" })} className={clsx("border border-green-900 bg-transparent text-center text-green-900 sm:text-[10px] text-[8px] font-semibold rounded-full xl:px-4 px-2 py-1.5", filters?.discount === "siblings" ? "bg-green-900 text-white" : "")}>Siblings Discount</Button>
                    <Button onPress={() => updateFilters({ discount: "other" })} className={clsx("border border-green-900 bg-transparent text-center text-green-900 sm:text-[10px] text-[8px] font-semibold rounded-full xl:px-4 px-2 py-1.5", filters?.discount === "other" ? "bg-green-900 text-white" : "")}>Other Discount</Button>
                </div>
            </div>
            <OrangeButton onPress={clearFilters} label='clear all filters' className=' bg-transparent text-orange-1000 min-h-11' />
        </div>
    )
}

export default CampFilters