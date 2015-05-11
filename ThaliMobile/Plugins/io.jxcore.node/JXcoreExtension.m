// Check LICENSE file

#import <Foundation/Foundation.h>
#import "JXcore.h"
#import "JXcoreExtension.h"
#import "CDVJXcore.h"

static void screenInfo(NSArray * arr_, NSString * callbackId)
{
    assert ([CDVJXcore activeInstance] != nil && "JXcore instance is not ready!");

    CGRect screenRect = [[UIScreen mainScreen] bounds];
    CGFloat screenWidth = screenRect.size.width;
    CGFloat screenHeight = screenRect.size.height;

    NSMutableArray *arr = [[NSMutableArray alloc] init];

    [arr addObject:[NSNumber numberWithDouble:screenWidth]];
    [arr addObject:[NSNumber numberWithDouble:screenHeight]];

    [JXcore callEventCallback:callbackId withParams:arr];
    
    dispatch_async(dispatch_get_main_queue(), ^() {
        NSMutableArray * barr = [[NSMutableArray alloc] init];
        [barr addObject:[NSNumber numberWithDouble:screenWidth]];
        [barr addObject:[NSNumber numberWithDouble:screenHeight]];
        [JXcore callEventCallback:@"brianCall" withParams:arr];
    });
}

@implementation JXcoreExtension

+ (void)defineMethods
{
    [JXcore addNativeMethod:screenInfo withName:@"ScreenInfo"];
}

@end